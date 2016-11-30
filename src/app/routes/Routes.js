import React from 'react';
import {
  Route,
  IndexRoute
 }                              from 'react-router';
import {
  App,
  ConnectedHome,
  ConnectedAbout,
  ConnectedComponents
}                               from '../containers';
import {
  PageNotFound
}                               from '../views';

const Routes = () => {
  return (
    <Route path="/" component={App} >
      <IndexRoute component={ConnectedHome} />
      <Route path="/components" component={ConnectedComponents} />
      <Route path="/about" component={ConnectedAbout} />
      <Route path="*" component={PageNotFound} />
    </Route>
  );
};

export default Routes;
