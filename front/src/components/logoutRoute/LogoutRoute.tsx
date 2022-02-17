import React, { useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { RouteComponentProps } from 'react-router';
import { ReduxConnectedProps, OwnProps } from './index';

// #region types
type Props = RouteComponentProps & ReduxConnectedProps & OwnProps;
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

LogoutRoute.displayName = 'LogoutRoute';

export default LogoutRoute;
