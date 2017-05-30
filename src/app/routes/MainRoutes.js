// @flow weak

import React from 'react';
import {
  Route,
  Switch
 }                              from 'react-router';
import {
  ConnectedHome,
  ConnectedAbout
}                               from '../containers';
import {
  PageNotFound
}                               from '../views';

const MainRoutes = () => {
  return (
    <Switch>
      <Route exact path="/" component={ConnectedHome} />
      <Route path="/about" component={ConnectedAbout} />
      <Route path="*" component={PageNotFound} />
    </Switch>
  );
};

export default MainRoutes;
