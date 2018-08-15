// @flow

// #region lifecycle
import React, { PureComponent } from 'react';
import {
  type Match,
  type Location,
  type RouterHistory,
} from 'react-router-dom';
import Jumbotron from 'reactstrap/lib/Jumbotron';
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

class PageNotFound extends PureComponent<Props, State> {
  // #region lifecycle
  render() {
    return (
      <div>
        <Jumbotron>
          <h1>Sorry this page does not exists...</h1>
        </Jumbotron>
      </div>
    );
  }
  // #endregion
}

export default PageNotFound;
