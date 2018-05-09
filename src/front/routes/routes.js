// @flow

// #region imports
import loadable from 'loadable-components';
// #endregion

export const Home = loadable(() => import('../pages/home'));
export const About = loadable(() => import('../pages/about'));
export const Login = loadable(() => import('../pages/login'));
export const Protected = loadable(() => import('../pages/protected'));
export const PageNotFound = loadable(() => import('../pages/pageNotFound'));
export const PrivateRoute = loadable(() =>
  import('../components/privateRoute/PrivateRoute'),
);
