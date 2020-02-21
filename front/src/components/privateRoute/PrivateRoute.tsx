import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { RouteComponentProps } from 'react-router';
import { MappedDispatchToProps, MappedStateToProps, OwnProps } from './index';

// #region types
type Props = {} & RouteComponentProps &
  OwnProps &
  MappedStateToProps &
  MappedDispatchToProps;
// #endregion

function PrivateRoute(props: Props) {
  const { component: InnerComponent, ...rest } = props;
  const { location, checkUserIsConnected } = props;

  const reponse = !!window && checkUserIsConnected();

  console.log('PrivateRoute- isAuthenticated: ', { isAuthenticated: reponse });
  return (
    <Route
      {...rest}
      render={props =>
        reponse.isAuthenticated ? (
          <InnerComponent {...props} />
        ) : (
          <Redirect to={{ pathname: '/login', state: { from: location } }} />
        )
      }
    />
  );
}

PrivateRoute.displayName = 'PrivateRoute';

export default PrivateRoute;
