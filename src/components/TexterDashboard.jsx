import PropTypes from "prop-types";
import React from "react";
import { StyleSheet, css } from "aphrodite";
import theme from "../styles/theme";
import { withRouter } from "react-router";

const styles = StyleSheet.create({
  container: {
    ...theme.layouts.multiColumn.container
  },
  content: {
    ...theme.layouts.multiColumn.flexColumn,
    paddingLeft: "2rem",
    paddingRight: "2rem",
    margin: "24px auto",
    backgroundColor: "#000000"
  }
});

class TexterDashboard extends React.Component {
  render() {
    const { main, topNav, fullScreen } = this.props;
    return (
      fullScreen || (
        <div>
          {topNav}
          <div className={css(styles.container)}>
            TexterDashboard
            <div className={css(styles.content)}>{main}</div>
          </div>
        </div>
      )
    );
  }
}

TexterDashboard.propTypes = {
  router: PropTypes.object,
  params: PropTypes.object,
  children: PropTypes.object,
  location: PropTypes.object,
  main: PropTypes.element,
  topNav: PropTypes.element,
  fullScreen: PropTypes.object
};

export default withRouter(TexterDashboard);
