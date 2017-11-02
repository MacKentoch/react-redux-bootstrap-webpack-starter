// @flow weak

import {
  createStore,
  applyMiddleware
}                               from 'redux';
import { createLogger }         from 'redux-logger';
import { routerMiddleware }     from 'react-router-redux';
// #region import createHistory from hashHistory or BrowserHistory:
import createHistory            from 'history/createHashHistory';
// import createHistory            from 'history/createBrowserHistory';
// #endregion
import thunkMiddleware          from 'redux-thunk';
import reducer                  from '../modules/reducers';
import fetchMiddleware          from '../middleware/fetchMiddleware';
import { composeWithDevTools }  from 'redux-devtools-extension';

const loggerMiddleware = createLogger({
  level     : 'info',
  collapsed : true
});

export const history = createHistory();

// createStore : enhancer
const enhancer = composeWithDevTools(
  applyMiddleware(
    thunkMiddleware,
    routerMiddleware(history),
    fetchMiddleware,
    loggerMiddleware // logger at the end
  )
);

export default function configureStore(initialState) {
  const store = createStore(reducer, initialState, enhancer);
  if (module.hot) {
    module.hot.accept('../modules/reducers', () =>
      store.replaceReducer(require('../modules/reducers').default)
    );
  }
  return store;
}
