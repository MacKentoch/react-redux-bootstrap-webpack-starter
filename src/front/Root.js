// @flow

// #region imports
import React, { Component } from 'react';
import { ConnectedRouter } from 'react-router-redux';
import { Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import compose from 'recompose/compose';
import configureStore from './redux/store/configureStore';
import { history } from './redux/store/configureStore';
import ScrollTop from './components/scrollToTop/ScrollToTop';
import LogoutRoute from './components/logoutRoute/LogoutRoute';
import withMainLayout from './hoc/withMainLayout';
import MainRoutes from './routes/MainRoutes';
import { PageNotFound, Login } from './routes/routes';
// #endregion

// #region flow types
type Props = any;
type State = any;
// #endregion

// #region constants
const MainApp = compose(withMainLayout())(MainRoutes);
const store = configureStore();
// #endregion

class Root extends Component<Props, State> {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <ScrollTop>
            <Switch>
              <MainApp />
              <Route exact path="/login" component={Login} />
              {/* logout: just redirects to login (App will take care of removing the token) */}
              <LogoutRoute path="/logout" />
              <Route path="*" component={PageNotFound} />
            </Switch>
          </ScrollTop>
        </ConnectedRouter>
      </Provider>
    );
  }
}
export default Root;
