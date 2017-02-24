import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';
import views from './views';

export const reducers = {
  views
};


export default combineReducers({
  ...reducers,
  routing: routerReducer
});
