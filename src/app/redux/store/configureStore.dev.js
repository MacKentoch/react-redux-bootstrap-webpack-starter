import { createStore, compose, applyMiddleware } from 'redux';
import { persistState }         from 'redux-devtools';
// import { routerReducer }        from 'react-router-redux';
import createLogger             from 'redux-logger';
import thunkMiddleware          from 'redux-thunk';
import reducer                  from '../modules/reducers';
import DevTools                 from '../devTools/DevTools.jsx';


const loggerMiddleware = createLogger({
  level     : 'info',
  collapsed : true
});

// createStore : enhancer
const enhancer = compose(
  applyMiddleware(thunkMiddleware, loggerMiddleware), // logger after thunk to avoid undefined actions
  persistState(getDebugSessionKey()),
  DevTools.instrument()
);

function getDebugSessionKey() {
  const matches = window.location.href.match(/[?&]debug_session=([^&]+)\b/);
  return (matches && matches.length > 0)? matches[1] : null;
}

export default function configureStore(initialState) {
  const store = createStore(reducer, initialState, enhancer);
  if (module.hot) {
    module.hot.accept('../modules/reducers', () =>
      store.replaceReducer(require('../modules/reducers').default)
    );
  }

  return store;
}
