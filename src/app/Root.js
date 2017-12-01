// @flow

// #region imports
import React, {
  Component
}                               from 'react';
import {
  Router,
  Switch,
  Route
}                               from 'react-router-dom';
import { history }              from './redux/store/configureStore';
import App                      from './containers/app';
import ScrollTop                from './components/scrollToTop/ScrollToTop';
import Login                    from './views/login';
import PageNotFound             from './views/pageNotFound/PageNotFound'; // not connected to redux (no index.js)
import LogoutRoute              from './components/logoutRoute/LogoutRoute';
// #endregion

// #region flow types
type Props = any;
type State = any;
// #endregion

class Root extends Component<Props, State> {
  render() {
    return (
      <div>
        <Router history={history}>
          <ScrollTop>
            <Switch>
              <Route exact path="/login" component={Login} />
              <App />
              {/* logout: just redirects to login (App will take care of removing the token) */}
              <LogoutRoute path="/logout" />
              <Route component={PageNotFound} />
            </Switch>
          </ScrollTop>
        </Router>
      </div>
    );
  }
}
export default Root;
