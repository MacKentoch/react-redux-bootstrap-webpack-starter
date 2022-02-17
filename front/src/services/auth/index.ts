import decode from 'jwt-decode';
import { isAfter } from 'date-fns';

// #region constants
const TOKEN_KEY = 'token';
const USER_INFO = 'userInfo';

const APP_PERSIST_STORES_TYPES: Array<STORES_TYPES> = [
  'localStorage',
  'sessionStorage',
];

const parse = JSON.parse;
const stringify = JSON.stringify;
// #endregion

/*
  auth object
  -> store "TOKEN_KEY"
  - default storage is "localStorage"
  - default token key is 'token'
 */
export const auth = {
  // /////////////////////////////////////////////////////////////
  // TOKEN
  // /////////////////////////////////////////////////////////////

  /**
   * get token from localstorage
   *
   * @param {'localStorage' | 'sessionStorage'} [fromStorage='localStorage'] specify storage
   * @param {any} [tokenKey=TOKEN_KEY]  optionnal parameter to specify a token key
   * @returns {string} token value
   */
  getToken(
    fromStorage: STORES_TYPES = APP_PERSIST_STORES_TYPES[0],
    tokenKey: TokenKey = TOKEN_KEY,
  ): string | null {
    // localStorage:
    if (fromStorage === APP_PERSIST_STORES_TYPES[0]) {
      return (localStorage && localStorage.getItem(tokenKey)) || null;
    }
    // sessionStorage:
    if (fromStorage === APP_PERSIST_STORES_TYPES[1]) {
      return (sessionStorage && sessionStorage.getItem(tokenKey)) || null;
    }
    // default:
    return null;
  },

  /**
   * set the token value into localstorage (managed by localforage)
   *
   * @param {string} [value=''] token value
   * @param {'localStorage' | 'sessionStorage'} [toStorage='localStorage'] specify storage
   * @param {any} [tokenKey='token'] token key
   * @returns {boolean} success/failure flag
   */
  setToken(
    value = '',
    toStorage: STORES_TYPES = APP_PERSIST_STORES_TYPES[0],
    tokenKey: TokenKey = TOKEN_KEY,
  ): void {
    if (!value || value.length <= 0) {
      return;
    }
    // localStorage:
    if (toStorage === APP_PERSIST_STORES_TYPES[0]) {
      if (localStorage) {
        localStorage.setItem(tokenKey, value);
        return;
      }
    }
    // sessionStorage:
    if (toStorage === APP_PERSIST_STORES_TYPES[1]) {
      if (sessionStorage) {
        sessionStorage.setItem(tokenKey, value);
        return;
      }
    }
  },

  /**
   * check
   * - if token key contains a valid token value (defined and not an empty value)
   * - if the token expiration date is passed
   *
   *
   * Note: 'isAuthenticated' just checks 'tokenKey' on store (localStorage by default or sessionStorage)
   *
   * You may think: 'ok I just put an empty token key and I have access to protected routes?''
   *    -> answer is:  YES^^
   * BUT
   * -> : your backend will not recognize a wrong token so private data or safe and you protected view could be a bit ugly without any data.
   *
   * => ON CONCLUSION: this aim of 'isAuthenticated'
   *    -> is to help for a better "user experience"  (= better than displaying a view with no data since server did not accept the user).
   *    -> it is not a security purpose (security comes from backend, since frontend is easily hackable => user has access to all your frontend)
   *
   * @param {'localStorage' | 'sessionStorage'} [fromStorage='localStorage'] specify storage
   * @param {any} [tokenKey=TOKEN_KEY] token key
   * @returns {bool} is authenticed response
   */
  isAuthenticated(
    fromStorage: STORES_TYPES = APP_PERSIST_STORES_TYPES[0],
    tokenKey: TokenKey = TOKEN_KEY,
  ): boolean {
    // localStorage:
    if (fromStorage === APP_PERSIST_STORES_TYPES[0]) {
      if (localStorage && localStorage.getItem(tokenKey)) {
        return true;
      }
      return false;
    }

    // sessionStorage:
    if (fromStorage === APP_PERSIST_STORES_TYPES[1]) {
      if (sessionStorage && sessionStorage.getItem(tokenKey)) {
        return true;
      }
      return false;
    }

    // default:
    return false;
  },

  /**
   * delete token
   *
   * @param {any} [tokenKey='token'] token key
   * @returns {bool} success/failure flag
   */
  clearToken(
    storage: STORES_TYPES = APP_PERSIST_STORES_TYPES[0],
    tokenKey: TokenKey = TOKEN_KEY,
  ): boolean {
    // localStorage:
    if (localStorage && localStorage[tokenKey]) {
      localStorage.removeItem(tokenKey);
      return true;
    }
    // sessionStorage:
    if (sessionStorage && sessionStorage[tokenKey]) {
      sessionStorage.removeItem(tokenKey);
      return true;
    }

    return false;
  },

  /**
   * return expiration date from token
   *
   * @param {string} encodedToken - base 64 token received from server and stored in local storage
   * @returns {date | null} returns expiration date or null id expired props not found in decoded token
   */
  getTokenExpirationDate(encodedToken: any): Date {
    if (!encodedToken) {
      return new Date(0); // is expired
    }

    const token: { exp: number } = decode(encodedToken);
    if (!token.exp) {
      return new Date(0); // is expired
    }

    const expirationDate = new Date(token.exp * 1000);
    return expirationDate;
  },

  /**
   * tell is token is expired (compared to now)
   *
   * @param {string} encodedToken - base 64 token received from server and stored in local storage
   * @returns {bool} returns true if expired else false
   */
  isExpiredToken(encodedToken: any): boolean {
    const expirationDate = this.getTokenExpirationDate(encodedToken);
    const rightNow = new Date();
    const isExpiredToken = isAfter(rightNow, expirationDate);

    return isExpiredToken;
  },

  // /////////////////////////////////////////////////////////////
  // USER_INFO
  // /////////////////////////////////////////////////////////////
  /**
   * get user info from localstorage
   *
   * @param {'localStorage' | 'sessionStorage'} [fromStorage='localStorage'] specify storage
   * @param {any} [userInfoKey='userInfo']  optionnal parameter to specify a token key
   * @returns {string} token value
   */
  getUserInfo(
    fromStorage: STORES_TYPES = APP_PERSIST_STORES_TYPES[0],
    userInfoKey: UserInfoKey = USER_INFO,
  ): any {
    // localStorage:
    if (fromStorage === APP_PERSIST_STORES_TYPES[0]) {
      try {
        return (
          (window &&
            localStorage &&
            parse(localStorage.getItem(userInfoKey) || '')) ||
          null
        );
      } catch (error) {
        return null;
      }
    }
    // sessionStorage:
    if (fromStorage === APP_PERSIST_STORES_TYPES[1]) {
      try {
        return (
          (window &&
            sessionStorage &&
            parse(sessionStorage.getItem(userInfoKey) || '')) ||
          null
        );
      } catch (error) {
        return null;
      }
    }
    // default:
    return null;
  },

  /**
   * set the userInfo value into localstorage
   *
   * @param {object} [value=''] token value
   * @param {'localStorage' | 'sessionStorage'} [toStorage='localStorage'] specify storage
   * @param {any} [userInfoKey='userInfo'] token key
   * @returns {boolean} success/failure flag
   */
  setUserInfo(
    value = '',
    toStorage: STORES_TYPES = APP_PERSIST_STORES_TYPES[0],
    userInfoKey: UserInfoKey = USER_INFO,
  ): any {
    if (!value || value.length <= 0) {
      return;
    }

    // localStorage:
    if (toStorage === APP_PERSIST_STORES_TYPES[0]) {
      if (localStorage) {
        localStorage.setItem(userInfoKey, stringify(value));
        return;
      }
    }

    // sessionStorage:
    if (toStorage === APP_PERSIST_STORES_TYPES[1]) {
      if (sessionStorage) {
        sessionStorage.setItem(userInfoKey, stringify(value));
        return;
      }
    }
  },

  /**
   * delete userInfo
   *
   * @param {string} [userInfoKey='userInfo'] token key
   * @returns {bool} success/failure flag
   */
  clearUserInfo(userInfoKey: UserInfoKey = USER_INFO): any {
    // localStorage:
    if (localStorage && localStorage[userInfoKey]) {
      localStorage.removeItem(userInfoKey);
      return;
    }

    // sessionStorage:
    if (sessionStorage && sessionStorage[userInfoKey]) {
      sessionStorage.removeItem(userInfoKey);
      return;
    }
  },

  // /////////////////////////////////////////////////////////////
  // COMMON
  // /////////////////////////////////////////////////////////////

  /**
   * forget me method: clear all
   * @returns {bool} success/failure flag
   */
  clearAllAppStorage(): any {
    if (localStorage) {
      localStorage.clear();
      return;
    }

    if (sessionStorage) {
      sessionStorage.clear();
      return;
    }
  },
};

export default auth;
