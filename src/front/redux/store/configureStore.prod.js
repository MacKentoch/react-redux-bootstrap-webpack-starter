// @flow

// #region imports
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createBrowserHistory as createHistory } from 'history';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import reducer from '../modules/reducers';
import fetchMiddleware from '../middleware/fetchMiddleware';
// #endregion

// #region constants
export const history = createHistory();
// #endregion

// #region createStore : enhancer
const enhancer = composeWithDevTools(
  applyMiddleware(thunkMiddleware, fetchMiddleware, routerMiddleware(history)),
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
  // $FlowIgnore
  const store = createStore(persistedReducer, initialState, enhancer);
  const persistor = persistStore(store);
  return { store, persistor };
}
