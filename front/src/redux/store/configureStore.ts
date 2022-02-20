import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createBrowserHistory as createHistory } from 'history';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import reducer from '../modules/reducers';

// #region constants
const isProd = process.env.NODE_ENV === 'production';
export const history = createHistory();
// #endregion

// #region createStore : enhancer

// #region logger middleware (dev only)
const loggerMiddleware = createLogger({
  level: 'info',
  collapsed: true,
});
// #endregion

const enhancer = !isProd
  ? composeWithDevTools(
      applyMiddleware(
        thunkMiddleware,
        loggerMiddleware, // logger at the end
      ),
    )
  : composeWithDevTools(applyMiddleware(thunkMiddleware));
// #endregion

// #region persisted reducer
const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['router'],
  // whitelist: ['userAuth'],
};

const persistedReducer = persistReducer(persistConfig, reducer);
// #endregion

export default function configureStore(initialState = {}) {
  const store = createStore(persistedReducer, initialState, enhancer);
  const persistor = persistStore(store);

  if ((module as any).hot) {
    (module as any).hot?.accept('../modules/reducers', () => {
      // @ts-ignore
      const nextAppReducer = require('../modules/reducers').default;
      store.replaceReducer(persistReducer(persistConfig, nextAppReducer));
    });
  }

  return { store, persistor };
}
