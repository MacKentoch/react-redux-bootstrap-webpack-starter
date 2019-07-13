// @flow

import React, { Component, Fragment } from 'react';
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
import * as userAuthActions from './redux/modules/userAuth';
import GlobalStyle from './style/GlobalStyles';

// #region flow types
type Props = any;
type State = any;
// #endregion

// #region constants
const MainApp = compose(withMainLayout())(MainRoutes);
// $FlowIgnore
const { store } = configureStore({});
// #endregion

class Root extends Component<Props, State> {
  componentDidMount() {
    store.dispatch(userAuthActions.checkUserIsConnected());
  }

  render() {
    return (
      <Provider store={store}>
        <Fragment>
          <ConnectedRouter history={history}>
            <ScrollTop>
              <Switch>
                <MainApp />
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
