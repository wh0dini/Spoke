import { StyleSheet, css } from "aphrodite";

const bgGrey = "rgb(214, 215, 223)";

export const messageListStyles = {
  // passesd directly to <MessageList>
  messageList: {
    overflow: "hidden",
    overflow: "-moz-scrollbars-vertical",
    padding: 8
  },
  messageSent: {
    textAlign: "left",
    marginLeft: "5px",
    marginRight: "5px",
    backgroundColor: "white",
    borderRadius: "16px",
    marginBottom: "10px",
    fontSize: "95%",
    width: "auto",
    maxWidth: "500px"
  },
  messageReceived: {
    marginRight: "5px%",
    marginLeft: "5px",
    color: "white",
    backgroundColor: "hsla(206, 99%, 31%, 0.74)", //#01579B",
    borderRadius: "16px",
    fontSize: "110%",
    lineHeight: "120%",
    marginBottom: "10px",
    width: "auto",
    maxWidth: "500px"
  }
};

export const inlineStyles = {
  inlineBlock: {
    display: "inline-block"
  },
  exitTexterIconButton: {
    float: "left",
    padding: "3px",
    height: "56px",
    zIndex: 100,
    top: 0,
    left: "-12px"
  },
  flatButtonLabel: {
    textTransform: "none",
    fontWeight: "bold"
  }
};

export const flexStyles = StyleSheet.create({
  topContainer: {
    margin: 0,
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    display: "flex",
    flexDirection: "column",
    height: "100%"
  },
  popoverSideboxesInner: {
    // expand to fill the whole popover
    width: "100%",
    height: "100%",
    // show campaign header in-view
    top: "50px",
    left: "18px",
    padding: "5px"
  },
  popover: {
    width: "85%",
    height: "85%",
    "@media(min-height: 800px)": {
      // if it's too tall, the current question options are too far away
      height: "50%"
    }
  },
  popoverLink: {
    float: "right",
    width: "4em",
    marginRight: "2em",
    fontWeight: "normal",
    fontSize: "80%"
  },
  popoverLinkColor: {
    color: "rgb(81, 82, 89)"
  },
  sectionHeaderToolbar: {
    flex: "0 0 auto"
  },
  sectionSideBox: {
    flex: "0 1 240px",
    overflowY: "scroll",
    textAlign: "center",
    overflow: "hidden scroll",
    maxWidth: "240px",
    "@media(max-width: 575px)": {
      display: "none"
    }
  },
  sectionSideBoxHeader: {
    height: 56,
    backgroundColor: "#000000"
  },
  sectionSideBoxContent: {
    padding: 24,
    borderLeft: "1px solid #C1C3CC",
    height: "100%"
  },
  superSectionMessageBox: {
    flex: "1 2 auto",
    overflowY: "scroll",
    overflow: "-moz-scrollbars-vertical",
    overflowX: "hidden",
    // for sidebar
    display: "flex",
    flexDirection: "row"
  },
  /// * Section Scrolling Message Thread
  sectionMessageThread: {
    flex: "1 1 auto",
    overflowY: "scroll"
  },
  sectionLeftSideBox: {
    flex: "1 0 260px",
    maxWidth: 260,
    overflow: "hidden scroll"
  },
  superSectionMessagePage: {
    display: "flex",
    flexGrow: 1,
    overflow: "hidden scroll"
  },
  superSectionMessageListAndControls: {
    display: "flex",
    flexDirection: "column",
    flexGrow: 1,
    maxHeight: "100%"
  },
  /// * Section OptOut Dialog
  sectionOptOutDialog: {
    padding: "4px 10px 9px 10px",
    zIndex: 2000,
    backgroundColor: "white",
    overflow: "visible",
    "@media (hover: hover) and (pointer: fine)": {
      // for touchpads and phones, the edge of the tablet is easier
      // vs for desktops, we want to maximize how far the mouse needs to travel
      maxWidth: "554px"
    }
  },
  subSectionOptOutDialogActions: {
    marginTop: 20,
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end"
  },
  /// * Section Texting Input Field
  sectionMessageField: {
    // messageField
    flex: "0 0 20px",
    padding: "0px 16px",
    marginBottom: "8px"
  },
  subSectionMessageFieldTextField: {
    "@media(max-width: 350px)": {
      overflowY: "scroll !important"
    }
  },
  /// * Section Reply/Exit Buttons
  sectionButtons: {
    // TODO: maybe make this contingent on whether there are answer buttons
    "@media(max-height: 600px)": {
      flexBasis: "96px" // TODO
    },
    "@media(min-height: 600px)": {
      flexBasis: "144px" // TODO
    },
    flexGrow: "0",
    flexShrink: "0",
    // flexBasis: ${130px|190px}", // stretches and shrinks more quickly than message
    flexDirection: "column",
    display: "flex",
    // flexWrap: "wrap",
    overflow: "hidden",
    position: "relative",
    paddingLeft: 12
  },
  subButtonsAnswerButtons: {
    flex: "1 1 auto", // keeps bottom buttons in place
    // height:105: webkit needs constraint on height sometimes
    //   during the inflection point of showing the shortcut-buttons
    //   without the height, the exit buttons get pushed down oddly
    height: "15px", //TODO
    // internal:
    margin: "9px 0px 0px 9px",
    width: "100%"
    // similar to 572 below, but give room for other shortcut-buttons
  },
  subSubButtonsAnswerButtonsCurrentQuestion: {
    marginBottom: "12px",
    //flex: "0 0 auto",
    width: "100%",
    // for mobile:
    whiteSpace: "nowrap",
    overflow: "hidden"
  },
  subSubAnswerButtonsColumns: {
    height: "0px",
    "@media(min-height: 600px)": {
      height: "37px" // TODO
    },
    display: "inline-block",
    //flex: "1 1 50%",
    overflow: "hidden",
    position: "relative"
  },
  subButtonsExitButtons: {
    // next/prev/skip/optout
    // width: "100%", default is better on mobile
    height: "40px",
    margin: "9px",
    // default works better for mobile right margin
    // flex: "0 0 40px",
    // internal:
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    alignContent: "space-between",
    // to 'win' against absoslute positioned content above it:
    zIndex: "10",
    "@media (hover: hover) and (pointer: fine)": {
      // for touchpads and phones, the edge of the tablet is easier
      // vs for desktops, we want to maximize how far the mouse needs to travel
      maxWidth: "554px"
    }
  },
  /// * Section Send Button
  sectionSend: {
    //sendButtonWrapper
    flex: `0 0 auto`,
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    alignContent: "space-between",
    padding: "9px 9px 9px 21px",
    "@media (hover: hover) and (pointer: fine)": {
      // for touchpads and phones, the edge of the tablet is easier
      // vs for desktops, we want to maximize how far the mouse needs to travel
      maxWidth: "554px"
    }
  },
  subSectionSendButton: {
    flex: "1 1 auto",
    width: "70%",
    height: "100%",
    //borderRadius: "0px",
    color: "white"
  },
  flatButton: {
    height: "40px",
    border: "1px solid #949494",
    // FlatButton property, setting here, overrides hover
    // backgroundColor: "white",
    borderRadius: "0",
    boxShadow: "none",
    maxWidth: "300px",
    "@media(max-width: 450px)": {
      // mobile crunch
      minWidth: "auto"
    }
  },
  button: {
    backgroundColor: "#0000FF",
    maxWidth: "300px",
    "@media(max-width: 450px)": {
      // mobile crunch
      minWidth: "auto"
    }
  },
  flatButtonLabelMobile: {
    "@media(max-width: 327px)": {
      // mobile crunch
      display: "none"
    }
  }
});
