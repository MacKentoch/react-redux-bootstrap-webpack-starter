/* eslint-disable no-process-env */
import React, {
  PropTypes,
  Component
}                               from 'react';
import {
  Router,
  // hashHistory,
  browserHistory
}                               from 'react-router';
import { Provider }             from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';
import configureStore           from './redux/store/configureStore';
import DevTools                 from './redux/devTools/DevTools.jsx';

const store         = configureStore();
const syncedHistory = syncHistoryWithStore(browserHistory, store);


class Root extends Component {
  render() {
    const { routes } = this.props;
    return (
      <Provider store={store}>
        <div>
          <Router history={syncedHistory}>
            {routes()}
          </Router>
          { process.env.NODE_ENV !== 'production' ? <DevTools /> : null }
        </div>
      </Provider>
    );
  }
}

Root.propTypes = {
  routes: PropTypes.any
};

export default Root;
