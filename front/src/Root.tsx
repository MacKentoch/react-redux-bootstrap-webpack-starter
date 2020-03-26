import React from 'react';
import { Component } from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { hot } from 'react-hot-loader/root';
import configureStore from './redux/store/configureStore';
import { history } from './redux/store/configureStore';
import ScrollTop from './components/scrollToTop';
import MainRoutes from './routes/MainRoutes';
import GlobalStyle from './style/GlobalStyles';
import Login from './pages/login';
import registerServiceWorker from './services/sw/registerServiceWorker';
import LogoutRoute from './components/logoutRoute';

// #region types
type Props = any;
type State = any;
// #endregion

// #region constants
const { store } = configureStore({});
// #endregion

class Root extends Component<Props, State> {
  componentDidMount() {
    // register service worker (no worry about multiple attempts to register, browser will ignore when already registered)
    registerServiceWorker();
  }

  componentDidCatch(error: any, info: any) {
    console.log('App error: ', error);
    console.log('App error info: ', info);
    //
  }

  render() {
    return (
      <Provider store={store}>
        <ThemeProvider theme={{}}>
          <React.Fragment>
            <ConnectedRouter history={history}>
              <ScrollTop>
                <Switch>
                  <Route exact path="/login">
                    <Login />
                  </Route>

                  {/* Application with main layout (could have multiple applications with different layouts) */}
                  <MainRoutes />
                  {/* logout: just redirects to login (App will take care of removing the token) */}
                  <LogoutRoute path="/logout" />
                </Switch>
              </ScrollTop>
            </ConnectedRouter>
            <GlobalStyle />
          </React.Fragment>
        </ThemeProvider>
      </Provider>
    );
  }
}

export default hot(Root);
