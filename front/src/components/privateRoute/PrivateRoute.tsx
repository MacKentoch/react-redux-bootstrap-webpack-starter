import React, { useEffect, useState } from 'react';
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

  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  useEffect(() => {
    async function checkAuth() {
      const { isAuthenticated } = await checkUserIsConnected();
      console.log('Private Route: ', {
        isAuthenticated,
      });
      setIsAuthenticated(isAuthenticated);
    }

    !!window && checkAuth();
  }, [location]);

  return (
    <Route
      {...rest}
      render={props =>
        isAuthenticated ? (
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
