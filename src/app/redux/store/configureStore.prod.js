// @flow weak

import {
  createStore,
  applyMiddleware,
  compose
}                         from 'redux';
import thunkMiddleware    from 'redux-thunk';
import reducer            from '../modules/reducers';
import fetchMiddleware    from '../middleware/fetchMiddleware';

// createStore : enhancer
// NOTE: if redux devtools extension is not installed, we just keep using Redux compose
const composeEnhancers =  typeof window === 'object' &&  // for universal ("isomorphic") apps
                          window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
                          ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
                            // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
                            // see: https://github.com/zalmoxisus/redux-devtools-extension/blob/master/docs/API/Arguments.md
                          })
                          : compose;

const enhancer = composeEnhancers(
  applyMiddleware(
    thunkMiddleware,
    fetchMiddleware
  )
);

export default function configureStore(initialState) {
  return createStore(reducer, initialState, enhancer);
}
