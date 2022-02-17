import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { RouteComponentProps } from 'react-router';
import { ReduxConnectedProps, OwnProps } from './index';

// #region types
type Props = RouteComponentProps & OwnProps & ReduxConnectedProps;
// #endregion

function PrivateRoute(props: Props) {
  const { children: InnerComponent, ...rest } = props;
  const { location, isAuthenticated } = props;

  return (
    <Route
      {...rest}
      render={() =>
        isAuthenticated ? (
          InnerComponent
        ) : (
          <Redirect to={{ pathname: '/login', state: { from: location } }} />
        )
      }
    />
  );
}

PrivateRoute.displayName = 'PrivateRoute';

export default PrivateRoute;
