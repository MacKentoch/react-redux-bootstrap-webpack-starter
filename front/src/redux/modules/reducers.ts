import { combineReducers } from 'redux';
import userAuth from './userAuth';

export const reducers = {
  userAuth,
};

export default combineReducers({
  ...reducers,
});
