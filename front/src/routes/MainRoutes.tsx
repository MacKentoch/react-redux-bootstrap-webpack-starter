import React from 'react';
import { Route, Switch } from 'react-router';
import {
  Home as AsyncHome,
  About as AsyncAbout,
  PageNotFound as AsyncPageNotFound,
  Protected as AsyncProtected,
} from './routes';
import PrivateRoute from '../components/privateRoute';

const MainRoutes = () => {
  return (
    <Switch>
      {/* public views: */}
      <Route exact path="/">
        <AsyncHome />
      </Route>

      <Route path="/about">
        <AsyncAbout />
      </Route>

      {/* private views: need user to be authenticated */}
      <PrivateRoute path="/protected">
        <AsyncProtected />
      </PrivateRoute>

      <Route path="*">
        <AsyncPageNotFound />
      </Route>
    </Switch>
  );
};

export default MainRoutes;
