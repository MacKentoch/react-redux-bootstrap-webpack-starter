import loadable from 'loadable-components';

export const Home = loadable(() => import('../pages/home'), {
  modules: ['home'],
});
export const About = loadable(() => import('../pages/about'), {
  modules: ['about'],
});
export const Login = loadable(() => import('../pages/login'), {
  modules: ['login'],
});
export const Protected = loadable(() => import('../pages/protected'), {
  modules: ['protected'],
});
export const PageNotFound = loadable(() => import('../pages/pageNotFound'), {
  modules: ['pageNotFound'],
});
export const PrivateRoute = loadable(
  () => import('../components/privateRoute/PrivateRoute'),
  { modules: ['PrivateRoute'] },
);
