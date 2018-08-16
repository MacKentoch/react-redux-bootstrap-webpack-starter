// @flow

// #region imports
import { format } from 'date-fns';
import appConfig from '../../../config/appConfig';
import userInfosMockData from '../../../mock/userInfosMock.json';
import { getLocationOrigin } from '../../../services/API/fetchTools';
import auth from '../../../services/auth';
import { type State } from '../../../types/redux/userAuth';
import { type Dispatch, type GetState } from '../../../types/redux/redux-thunk';
// #endregion

// #region CONSTANTS
const REQUEST_USER_INFOS_DATA: string = 'REQUEST_USER_INFOS_DATA';
const RECEIVED_USER_INFOS_DATA: string = 'RECEIVED_USER_INFOS_DATA';
const ERROR_USER_INFOS_DATA: string = 'ERROR_USER_INFOS_DATA';

const REQUEST_LOG_USER: string = 'REQUEST_LOG_USER';
const RECEIVED_LOG_USER: string = 'RECEIVED_LOG_USER';
const ERROR_LOG_USER: string = 'ERROR_LOG_USER';

const CHECK_IF_USER_IS_AUTHENTICATED = 'CHECK_IF_USER_IS_AUTHENTICATED';

const DISCONNECT_USER = 'DISCONNECT_USER';
// #endregion

// #region flow types
type ActionType =
  | 'REQUEST_USER_INFOS_DATA'
  | 'RECEIVED_USER_INFOS_DATA'
  | 'ERROR_USER_INFOS_DATA'
  | 'REQUEST_LOG_USER'
  | 'RECEIVED_LOG_USER'
  | 'ERROR_LOG_USER'
  | 'CHECK_IF_USER_IS_AUTHENTICATED'
  | 'DISCONNECT_USER';

type Action = {
  type: ActionType,

  isFetching?: boolean,
  actionTime?: string,
  data?: { ...any } | Array<any>,
  error: { ...any },
};
// #endregion

// #region REDUCER

// #region initial State
const initialState: State = {
  // actions details
  isFetching: false,
  isLogging: false,
  time: '',

  // userInfos
  id: '',
  login: '',
  firstname: '',
  lastname: '',

  token: null,
  isAuthenticated: false, // authentication status (token based auth)
};
// #endregion

// #region reducer
export default function(state: State = initialState, action: Action): State {
  const currentTime = format(new Date());

  switch (action.type) {
    case CHECK_IF_USER_IS_AUTHENTICATED:
      return {
        ...state,
        actionTime: currentTime,
        isAuthenticated: action.isAuthenticated,
        token: action.token || initialState.token,
        id: action.user && action.user.id ? action.user.id : initialState.id,
        login:
          action.user && action.user.login
            ? action.user.login
            : initialState.login,
        firstname:
          action.user && action.user.firstname
            ? action.user.firstname
            : initialState.firstname,
        lastname:
          action.user && action.user.lastname
            ? action.user.lastname
            : initialState.firstname,
      };

    case DISCONNECT_USER:
      return {
        ...state,
        actionTime: currentTime,
        isAuthenticated: false,
        token: initialState.token,
        id: initialState.id,
        login: initialState.login,
        firstname: initialState.firstname,
        lastname: initialState.lastname,
      };

    // user login (get token and userInfo)
    case REQUEST_LOG_USER:
      return {
        ...state,
        actionTime: currentTime,
        isLogging: true,
      };

    case RECEIVED_LOG_USER:
      const userLogged = action.payload.data;

      return {
        ...state,
        actionTime: currentTime,
        isAuthenticated: true,
        token: userLogged.token,
        id: userLogged.id,
        login: userLogged.login,
        firstname: userLogged.firstname,
        lastname: userLogged.lastname,
        isLogging: false,
      };

    case ERROR_LOG_USER:
      return {
        ...state,
        actionTime: currentTime,
        isAuthenticated: false,
        isLogging: false,
      };

    // not used right now:
    case REQUEST_USER_INFOS_DATA:
      return {
        ...state,
        actionTime: currentTime,
        isFetching: true,
      };

    case RECEIVED_USER_INFOS_DATA:
      const userInfos = action.payload.data;

      return {
        ...state,
        actionTime: currentTime,
        isFetching: false,
        id: userInfos.id,
        login: userInfos.login,
        firstname: userInfos.firstname,
        lastname: userInfos.lastname,
      };

    case ERROR_USER_INFOS_DATA:
      return {
        ...state,
        actionTime: currentTime,
        isFetching: false,
      };

    default:
      return state;
  }
}
// #endregion

// #endregion

// #region ACTIONS CREATORS

// #region disconnect user
export function disconnectUser(): Action {
  auth.clearAllAppStorage();
  return { type: DISCONNECT_USER };
}
// #endregion

// #region check if user is connected
export function checkUserIsConnected(): Action {
  const token = auth.getToken();
  const user = auth.getUserInfo();
  const checkUserHasId = obj => obj && obj._id;
  const isAuthenticated = token && checkUserHasId(user) ? true : false;

  return {
    type: CHECK_IF_USER_IS_AUTHENTICATED,
    token,
    ...user,
    isAuthenticated,
  };
}
// #endregion

// #region loguser
function logUser(login: string, password: string): Promise<any> {
  return async (dispatch: Dispatch<State>): Promise<any> => {
    const FETCH_TYPE = appConfig.DEV_MODE ? 'FETCH_MOCK' : 'FETCH';
    const __SOME_LOGIN_API__ = 'login';

    const mockResult = userInfosMockData; // will be fetch_mock data returned (in case FETCH_TYPE = 'FETCH_MOCK', otherwise cata come from server)
    const url = `${getLocationOrigin()}/${__SOME_LOGIN_API__}`;
    const method = 'post';
    const headers = {};
    const options = {
      credentials: 'same-origin',
      data: {
        login,
        password,
      },
    };

    // fetchMiddleware (does: fetch mock, real fetch, dispatch 3 actions... for a minimum code on action creator!)
    return dispatch({
      type: 'FETCH_MIDDLEWARE',
      fetch: {
        // common props:
        type: FETCH_TYPE,
        actionTypes: {
          request: REQUEST_LOG_USER,
          success: RECEIVED_LOG_USER,
          fail: ERROR_LOG_USER,
        },
        // mock fetch props:
        mockResult,
        // real fetch props:
        url,
        method,
        headers,
        options,
      },
    });
  };
}

export function logUserIfNeeded(
  email: string,
  password: string,
): (...any) => Promise<any> {
  return (
    dispatch: Dispatch<Action>,
    getState: GetState<{ userAuth: State, ...any }>,
  ): Promise<any> => {
    if (shouldLogUser(getState())) {
      return dispatch(logUser(email, password));
    }
    return Promise.resolve();
  };
}
function shouldLogUser(state: { userAuth: State, ...any }): boolean {
  const { isLogging } = state.userAuth;

  if (isLogging) {
    return false;
  }
  return true;
}

function fetchUserInfosData(id: string = ''): Promise<any> {
  return (dispatch: Dispatch<State>): Promise<any> => {
    const token = auth.getToken();
    const {
      DEV_MODE,
      api: { users },
    } = appConfig;
    const FETCH_TYPE = DEV_MODE ? 'FETCH_MOCK' : 'FETCH';

    const mockResult = userInfosMockData; // will be fetch_mock data returned (in case FETCH_TYPE = 'FETCH_MOCK', otherwise cata come from server)
    const url = `${getLocationOrigin()}/${users}/${id}`;
    const method = 'get';
    const headers = { authorization: `Bearer ${token}` };
    const options = { credentials: 'same-origin' }; // put options here (see axios options)

    return dispatch({
      type: 'FETCH_MIDDLEWARE',
      fetch: {
        // common props:
        type: FETCH_TYPE,
        actionTypes: {
          request: REQUEST_USER_INFOS_DATA,
          success: RECEIVED_USER_INFOS_DATA,
          fail: ERROR_USER_INFOS_DATA,
        },
        // mock fetch props:
        mockResult,
        // real fetch props:
        url,
        method,
        headers,
        options,
      },
    });
  };
}

export function fetchUserInfoDataIfNeeded(id: string = '') {
  return (
    dispatch: (Dispatch<State>) => any,
    getState: () => { userAuth: State, ...any },
  ) => {
    if (shouldFetchUserInfoData(getState())) {
      return dispatch(fetchUserInfosData(id));
    }
    return Promise.resolve();
  };
}

function shouldFetchUserInfoData(state: { userAuth: State, ...any }): boolean {
  const { isFetching } = state.userAuth;

  if (isFetching) {
    return false;
  }
  return true;
}
