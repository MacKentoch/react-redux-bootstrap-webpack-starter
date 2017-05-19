// @flow weak

import { routerReducer }    from 'react-router-redux';
import { combineReducers }  from 'redux';
import views                from './views';
import fakeModuleWithFetch  from './fakeModuleWithFetch';

export const reducers = {
  views,
  fakeModuleWithFetch
};

export default combineReducers({
  ...reducers,
  routing: routerReducer
});
