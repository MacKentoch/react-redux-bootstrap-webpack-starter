import {
  createStore,
  applyMiddleware,
  compose
}                         from 'redux';
import createLogger       from 'redux-logger';
import thunkMiddleware    from 'redux-thunk';
import reducer            from '../modules/reducers';

const loggerMiddleware = createLogger({
  level     : 'info',
  collapsed : true
});

// createStore : enhancer
const enhancer = compose(
  applyMiddleware(thunkMiddleware, loggerMiddleware) // logger after thunk to avoid undefined actions
);

export default function configureStore(initialState) {
  return createStore(reducer, initialState, enhancer);
}
