import { mapFieldsToModel } from './lib/utils'
import { Assignment, r } from '../models'
import { getOffsets, defaultTimezoneIsBetweenTextingHours } from '../../lib'

export const schema = `
  type Assignment {
    id: ID
    texter: User
    campaign: Campaign
    contacts(contactsFilter: ContactsFilter): [CampaignContact]
    contactsCount(contactsFilter: ContactsFilter): Int
    userCannedResponses: [CannedResponse]
    campaignCannedResponses: [CannedResponse]
  }
`
function getContacts(assignment, contactsFilter, textingHoursEnforced, textingHours) {
  const getIndexValuesWithOffsets = (offsets) => offsets.map(([offset, hasDST]) => ([
    assignment.id,
    `${offset}_${hasDST}`
  ]))

  let index = 'assignment_id'
  let indexValues = assignment.id

  const [textingHoursStart, textingHoursEnd] = textingHours
  const config = { textingHoursStart, textingHoursEnd, textingHoursEnforced }
  const [validOffsets, invalidOffsets] = getOffsets(config)
  const filter = {}

  if (contactsFilter) {
    if (contactsFilter.hasOwnProperty('validTimezone') && contactsFilter.validTimezone !== null) {
      index = 'assignment_timezone_offset'


      if (contactsFilter.validTimezone === true) {
        indexValues = getIndexValuesWithOffsets(validOffsets)
        if (defaultTimezoneIsBetweenTextingHours(config)) {
          indexValues.push([assignment.id, '']) // missing timezones are ok to text
        }
      } else if (contactsFilter.validTimezone === false ){
        indexValues = getIndexValuesWithOffsets(invalidOffsets)
        if (!defaultTimezoneIsBetweenTextingHours(config)) {
          indexValues.push([assignment.id, '']) // missing timezones are not ok to text
        }
      }

      indexValues = r.args(indexValues)
    }

    if (contactsFilter.hasOwnProperty('messageStatus') && contactsFilter.messageStatus !== null) {
      filter.message_status = contactsFilter.messageStatus
    }
    if (contactsFilter.hasOwnProperty('isOptedOut') && contactsFilter.isOptedOut !== null) {
      filter.is_opted_out = contactsFilter.isOptedOut
    }
  }
  let query = r.table('campaign_contact')
    .getAll(indexValues, { index })

  query = query.filter(filter)

  return query
}

export const resolvers = {
  Assignment: {
    ...mapFieldsToModel([
      'id'
    ], Assignment),
    texter: async (assignment, _, { loaders }) => (
      loaders.user.load(assignment.user_id)
    ),
    campaign: async(assignment, _, { loaders }) => loaders.campaign.load(assignment.campaign_id),

    contactsCount: async (assignment, { contactsFilter }, { organizationId }) => {
      const organization = await r.table('organization').get(organizationId)
      const textingHoursEnforced = organization.texting_hours_settings.is_enforced
      const textingHours = organization.texting_hours_settings.permitted_hours


      return getContacts(assignment, contactsFilter, textingHoursEnforced, textingHours).count()
    },

    contacts: async (assignment, { contactsFilter }, { organizationId }) => {
      const organization = await r.table('organization').get(organizationId)
      const textingHoursEnforced = organization.texting_hours_settings.is_enforced
      const textingHours = organization.texting_hours_settings.permitted_hours

      return getContacts(assignment, contactsFilter, textingHoursEnforced, textingHours)
    },
    campaignCannedResponses: async(assignment) => (
      await r.table('canned_response')
        .getAll(assignment.campaign_id, { index: 'campaign_id' })
        .filter({ user_id: '' })
    ),
    userCannedResponses: async(assignment) => (
      await r.table('canned_response')
        .getAll(assignment.campaign_id, { index: 'campaign_id' })
        .filter({ user_id: assignment.user_id })
    )
  }
}
