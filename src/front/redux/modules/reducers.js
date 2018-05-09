// @flow

// #region imports
import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';
import fakeModuleWithFetch from './fakeModuleWithFetch';
import userAuth from './userAuth';
// #endregion

export const reducers = {
  fakeModuleWithFetch,
  userAuth,
};

export default combineReducers({
  ...reducers,
  routing: routerReducer,
});
