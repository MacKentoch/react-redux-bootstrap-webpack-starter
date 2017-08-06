// @flow weak

import {
  createStore,
  applyMiddleware
}                               from 'redux';
import thunkMiddleware          from 'redux-thunk';
import reducer                  from '../modules/reducers';
import fetchMiddleware          from '../middleware/fetchMiddleware';
import { composeWithDevTools }  from 'redux-devtools-extension';

// createStore : enhancer
const enhancer = composeWithDevTools(
  applyMiddleware(
    thunkMiddleware,
    fetchMiddleware
  )
);

export default function configureStore(initialState) {
  return createStore(reducer, initialState, enhancer);
}
