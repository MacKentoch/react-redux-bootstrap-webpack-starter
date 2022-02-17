import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { RouteComponentProps } from 'react-router';
import { ReduxConnectedProps, OwnProps } from './index';

// #region types
type Props = RouteComponentProps & OwnProps & ReduxConnectedProps;
// #endregion

function PrivateRoute(props: Props) {
  const { component: InnerComponent, ...rest } = props;
  const { location, isAuthenticated } = props;

  return (
    <Route
      {...rest}
      render={(innerComponentProps) =>
        isAuthenticated ? (
          <InnerComponent {...innerComponentProps} />
        ) : (
          <Redirect to={{ pathname: '/login', state: { from: location } }} />
        )
      }
    />
  );
}

PrivateRoute.displayName = 'PrivateRoute';

export default PrivateRoute;
