// @flow

// #region imports
import React, { PureComponent } from 'react';
import {
  type Match,
  type Location,
  type RouterHistory,
} from 'react-router-dom';
// #endregion

// #region flow types
type Props = {
  // react-router 4:
  match: Match,
  location: Location,
  history: RouterHistory,

  ...any,
};
type State = any;
// #endregion

class About extends PureComponent<Props, State> {
  // #region lifecycle
  render() {
    return (
      <div>
        <h1>About</h1>
      </div>
    );
  }
  // #endregion
}

export default About;
