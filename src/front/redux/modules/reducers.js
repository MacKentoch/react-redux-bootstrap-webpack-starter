// @flow

import { combineReducers } from 'redux';
import fakeModuleWithFetch from './fakeModuleWithFetch';
import userAuth from './userAuth';

export const reducers = {
  fakeModuleWithFetch,
  userAuth,
};

// $FlowIgnore
export default combineReducers({
  ...reducers,
});
