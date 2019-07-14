// @flow

import React, { Component, Fragment } from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
// import { ThemeProvider } from 'style-components';
import configureStore from './redux/store/configureStore';
import { history } from './redux/store/configureStore';
import ScrollTop from './components/scrollToTop/ScrollToTop';
import MainLayout from './layout/MainLayout';
import MainRoutes from './routes/MainRoutes';
import { PageNotFound } from './routes/routes';
import * as userAuthActions from './redux/modules/userAuth';
import GlobalStyle from './style/GlobalStyles';

// #region flow types
type Props = any;
type State = any;
// #endregion

// #region constants
// $FlowIgnore
const { store } = configureStore({});
// #endregion

class Root extends Component<Props, State> {
  componentDidMount() {
    store.dispatch(userAuthActions.checkUserIsConnected());
  }

  componentDidCatch(error: any, info: any) {
    console.log('error was catch by Root component: ', { error, info });
  }

  render() {
    return (
      <Provider store={store}>
        <Fragment>
          <ConnectedRouter history={history}>
            <ScrollTop>
              <Switch>
                <MainLayout>
                  <MainRoutes />
                </MainLayout>
                <Route path="*" component={PageNotFound} />
              </Switch>
            </ScrollTop>
          </ConnectedRouter>
          <GlobalStyle />
        </Fragment>
      </Provider>
    );
  }
}
export default Root;
