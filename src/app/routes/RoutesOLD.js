/* eslint-disable no-process-env */

import React from 'react';
import {
  Router,
  Route,
  IndexRoute,
  // hashHistory,
  browserHistory
 }                              from 'react-router';

export const Routes = () => {
  return (
    <Provider store={store}>
      <div>
        <Router history={syncedHistory}>
          <Route path="/" component={App} >
            <IndexRoute component={ConnectedHome} />
            <Route path="/components" component={ConnectedComponents} />
            <Route path="/about" component={ConnectedAbout} />
            <Route path="*" component={PageNotFound} />
          </Route>
        </Router>
        { process.env.NODE_ENV !== 'production' ? <DevTools /> : null }
      </div>
    </Provider>
  );
};
