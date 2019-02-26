// @flow

// #region imports
import React from 'react';
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

// #endregion

function PageNotFound(props: Props) {
  return (
    <div>
      <Jumbotron>
        <h1>Sorry this page does not exists...</h1>
      </Jumbotron>
    </div>
  );
}

PageNotFound.displayName = 'PageNotFound';

export default PageNotFound;
