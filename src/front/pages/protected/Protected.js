// @flow

// #region imports
import React from 'react';
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
// #endregion

function Protected(props: Props) {
  return (
    <div>
      <h1>Protected view</h1>
      <h3>If you can read, it means you are authenticated</h3>
    </div>
  );
}

Protected.displayName = 'Protected';

export default Protected;
