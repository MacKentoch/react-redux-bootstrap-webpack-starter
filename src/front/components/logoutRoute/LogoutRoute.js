// @flow

// #region imports
import React, { useEffect } from 'react';
import { Route, Redirect, withRouter } from 'react-router-dom';
import {
  type Match,
  type Location,
  type RouterHistory,
} from 'react-router-dom';
import auth from '../../services/auth';
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

function LogoutRoute(props: Props) {
  useEffect(() => auth.clearAllAppStorage());

  return (
    <Route {...this.props}>
      <Redirect to={{ pathname: '/login' }} />
    </Route>
  );
}

export default withRouter(LogoutRoute);
