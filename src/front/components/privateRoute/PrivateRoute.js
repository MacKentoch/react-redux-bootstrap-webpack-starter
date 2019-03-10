// @flow

// #region imports
import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import {
  type Match,
  type Location,
  type RouterHistory,
} from 'react-router-dom';
import { type UserAuthActions } from '../../types/redux/userAuth';
// #endregion

// #region flow types
type Props = {
  // react-router 4:
  match: Match,
  location: Location,
  history: RouterHistory,

  // parent
  component: any,
  path: string,

  ...any,
} & UserAuthActions;

type State = any;
// #endregion

class PrivateRoute extends Component<Props, State> {
  // #region lifecycle
  render() {
    const { component: InnerComponent, ...rest } = this.props;
    const { location, checkUserIsConnected } = this.props;

    const { isAuthenticated } = checkUserIsConnected();

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
  // #endregion
}

export default PrivateRoute;
