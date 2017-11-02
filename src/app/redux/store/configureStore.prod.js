// @flow weak

import {
  createStore,
  applyMiddleware
}                               from 'redux';
import thunkMiddleware          from 'redux-thunk';
import { routerMiddleware }     from 'react-router-redux';
// #region import createHistory from hashHistory or BrowserHistory:
import createHistory            from 'history/createHashHistory';
// import createHistory            from 'history/createBrowserHistory';
// #endregion
import reducer                  from '../modules/reducers';
import fetchMiddleware          from '../middleware/fetchMiddleware';
import { composeWithDevTools }  from 'redux-devtools-extension';

export const history = createHistory();

// createStore : enhancer
const enhancer = composeWithDevTools(
  applyMiddleware(
    thunkMiddleware,
    routerMiddleware(history),
    fetchMiddleware
  )
);

export default function configureStore(initialState) {
  return createStore(reducer, initialState, enhancer);
}
