// @flow

// #region imports
import React, { Component } from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import compose from 'recompose/compose';
import configureStore from './redux/store/configureStore';
import { history } from './redux/store/configureStore';
import ScrollTop from './components/scrollToTop/ScrollToTop';
import withMainLayout from './hoc/withMainLayout';
import MainRoutes from './routes/MainRoutes';
import { PageNotFound } from './routes/routes';
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
              <Route path="*" component={PageNotFound} />
            </Switch>
          </ScrollTop>
        </ConnectedRouter>
      </Provider>
    );
  }
}
export default Root;
