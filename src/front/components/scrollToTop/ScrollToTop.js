// @flow

// #region imports
import React, { Component } from 'react';
import {
  type Match,
  type Location,
  type RouterHistory,
} from 'react-router-dom';
import { withRouter } from 'react-router';
// #endregion

// #region flow types
type Props = {
  // react-router 4:
  match: Match,
  location: Location,
  history: RouterHistory,

  children: React.ReactNode,

  ...any,
};
type State = any;
// #endregion

class ScrollToTop extends Component<Props, State> {
  // #region lifecycle
  componentDidUpdate(prevProps: Props) {
    if (window) {
      const { location: prevLocation } = prevProps;
      const { location: nextLocation } = this.props;

      if (prevLocation !== nextLocation) {
        window.scrollTo(0, 0);
      }
    }
  }

  render() {
    const { children } = this.props;
    return children;
  }
  // #endregion
}

export default withRouter(ScrollToTop);
