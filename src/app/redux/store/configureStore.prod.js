'use strict';

import {
  createStore,
  applyMiddleware,
  compose,
  combineReducers
}                         from 'redux';
import createLogger       from 'redux-logger';
import * as reducers      from '../reducers';
import { routerReducer }  from 'react-router-redux';

const loggerMiddleware = createLogger({
  level     : 'info',
  collapsed : true
});

// combine reducers
const reducer = combineReducers({
  ...reducers,
  routing: routerReducer
});

const finalCreateStore = compose(
  applyMiddleware(loggerMiddleware)
)(createStore);

export default function configureStore(initialState) {
  return finalCreateStore(reducer, initialState);
}
