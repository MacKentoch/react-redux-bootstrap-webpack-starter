import React from 'react';
import { Route, Switch } from 'react-router';
import { Home, About, PageNotFound, Protected, Login } from './routes';
import LogoutRoute from '../components/logoutRoute';
import PrivateRoute from '../components/privateRoute';

const MainRoutes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <PrivateRoute path="/protected" component={Protected} />
      <Route exact path="/login" component={Login} />
      <LogoutRoute path="/logout" />
      <Route path="*" component={PageNotFound} />
    </Switch>
  );
};

export default MainRoutes;
