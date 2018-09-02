// @flow

// #region imports
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
});
