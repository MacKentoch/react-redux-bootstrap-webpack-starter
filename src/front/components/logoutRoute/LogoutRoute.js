// @flow

import React, { useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';
import {
  type Match,
  type Location,
  type RouterHistory,
} from 'react-router-dom';
import { type UserAuthActions } from '../../types/redux/modules/userAuth';

// #region flow types
type Props = {
  // react-router 4:
  match: Match,
  location: Location,
  history: RouterHistory,
} & UserAuthActions;
// #endregion

function LogoutRoute(props: Props) {
  const { disconnectUser } = props;
  useEffect(() => disconnectUser());

  return (
    <Route {...props}>
      <Redirect to={{ pathname: '/login' }} />
    </Route>
  );
}

export default LogoutRoute;
