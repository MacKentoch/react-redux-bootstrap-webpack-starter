// @flow

import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createBrowserHistory as createHistory } from 'history';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunkMiddleware from 'redux-thunk';
import reducer from '../modules/reducers';
import fetchMiddleware from '../middleware/fetchMiddleware';

// #region constants
export const history = createHistory();
// #endregion

// #region createStore : enhancer

// #region logger middleware (dev only)
const loggerMiddleware = createLogger({
  level: 'info',
  collapsed: true,
});
// #endregion

const enhancer = composeWithDevTools(
  applyMiddleware(
    thunkMiddleware,
    routerMiddleware(history),
    fetchMiddleware,
    loggerMiddleware, // logger at the end
  ),
);
// #endregion

// #region persisted reducer
const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['router'],
  // whitelist: ['userAuth'],
};

const persistedReducer = persistReducer(
  persistConfig,
  connectRouter(history)(reducer),
);
// #endregion

export default function configureStore(initialState: any = {}) {
  const store = createStore(persistedReducer, initialState, enhancer);

  // $FlowIgnore
  if (module.hot) {
    module.hot.accept('../modules/reducers', () =>
      store.replaceReducer(require('../modules/reducers').default),
    );
  }

  const persistor = persistStore(store);
  return { store, persistor };
}
