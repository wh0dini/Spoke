const env_production = {
  NODE_ENV: "production",
  SUPPRESS_SELF_INVITE: "",
  AWS_ACCESS_KEY_ID: "",
  AWS_SECRET_ACCESS_KEY: "",
  AWS_S3_BUCKET_NAME: "",
  APOLLO_OPTICS_KEY: "",
  DEV_APP_PORT: 8090,
  ASSETS_DIR: "./build/client/assets",
  ASSETS_MAP_FILE: "assets.json",
  CAMPAIGN_ID: "campaign-id-hash",
  DB_HOST: "127.0.0.1",
  DB_PORT: 5432,
  DB_NAME: "spokedev",
  DB_USER: "spoke",
  DB_PASSWORD: "spoke",
  DB_KEY: "",
  DB_TYPE: "",
  DB_MIN_POOL: 2,
  DB_MAX_POOL: 10,
  DB_USE_SSL: false,
  DEFAULT_SERVICE: "twilio",
  JOB_DB_HOST: "127.0.0.1",
  JOB_DB_PORT: 6379,
  BASE_URL: "https://spoke.example.com",
  PRIVACY_URL: "https://www.example.com/privacy",
  AUTH0_DOMAIN: "example.auth0.com",
  AUTH0_CLIENT_ID: "",
  AUTH0_CLIENT_SECRET: "",
  SESSION_SECRET: "",
  NEXMO_API_KEY: "",
  NEXMO_API_SECRET: "",
  TWILIO_ACCOUNT_SID: "",
  TWILIO_AUTH_TOKEN: "",
  TWILIO_STATUS_CALLBACK_URL: "http://example.com:3000/twilio",
  PHONE_NUMBER_COUNTRY: "US",
  EMAIL_HOST: "",
  EMAIL_HOST_PASSWORD: "",
  EMAIL_HOST_USER: "",
  EMAIL_HOST_PORT: "",
  EMAIL_FROM: "help@example.com",
  ROLLBAR_CLIENT_TOKEN: "",
  ROLLBAR_ACCESS_TOKEN: "",
  ROLLBAR_ENDPOINT: "https://api.rollbar.com/api/1/item/",
  ALLOW_SEND_ALL: false,
  DST_REFERENCE_TIMEZONE: "US/Eastern"
};

module.exports = {
  /**
   * Application configuration section
   * http://pm2.keymetrics.io/docs/usage/application-declaration/
   */
  apps: [
    // First application
    {
      name: "spoke-server",
      script: "./build/server/server",
      env_production: env_production
    },
    {
      name: "job-handler",
      script: "./build/server/workers/job-handler.js",
      env_production: env_production
    },
    {
      name: "incoming-message-handler",
      script: "./build/server/workers/incoming-message-handler.js",
      env_production: env_production
    },
    {
      name: "message-sender-01",
      script: "./build/server/workers/message-sender-01.js",
      env_production: env_production
    },
    {
      name: "message-sender-234",
      script: "./build/server/workers/message-sender-234.js",
      env_production: env_production
    },
    {
      name: "message-sender-56",
      script: "./build/server/workers/message-sender-56.js",
      env_production: env_production
    },
    {
      name: "message-sender-789",
      script: "./build/server/workers/message-sender-789.js",
      env_production: env_production
    }
  ]
};
