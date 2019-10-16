import React from 'react';
import {useEffect} from 'react';
import { Route, Redirect } from 'react-router-dom';
import { RouteComponentProps } from 'react-router';
import { MappedDispatchToProps, MappedStateToProps, OwnProps } from './index';

// #region types
type Props = {} & RouteComponentProps &
  MappedDispatchToProps &
  MappedStateToProps &
  OwnProps;
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
