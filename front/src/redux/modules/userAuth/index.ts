import axios from 'axios';
import { format } from 'date-fns';
import { ThunkAction } from 'redux-thunk';
import { AnyAction } from 'redux';
import appConfig from '../../../config/appConfig';
import userInfosMockData from '../../../mock/userInfosMock.json';
import { getLocationOrigin } from '../../../services/API/fetchTools';
import auth from '../../../services/auth';

// #region CONSTANTS
const REQUEST_USER_INFOS_DATA = 'REQUEST_USER_INFOS_DATA';
const RECEIVED_USER_INFOS_DATA = 'RECEIVED_USER_INFOS_DATA';
const ERROR_USER_INFOS_DATA = 'ERROR_USER_INFOS_DATA';

const REQUEST_LOG_USER = 'REQUEST_LOG_USER';
const RECEIVED_LOG_USER = 'RECEIVED_LOG_USER';
const ERROR_LOG_USER = 'ERROR_LOG_USER';

const CHECK_IF_USER_IS_AUTHENTICATED = 'CHECK_IF_USER_IS_AUTHENTICATED';

const DISCONNECT_USER = 'DISCONNECT_USER';
// #endregion

// #region REDUCER

// #region initial State
const initialState: UserAuthState = {
  // actions details
  isFetching: false,
  actionTime: '',
  isLogging: false,

  // userInfos
  id: '',
  login: '',
  firstname: '',
  lastname: '',

  token: '',
  isAuthenticated: false, // authentication status (token based auth)
};
// #endregion

// #region reducer
export default function (
  state: UserAuthState = initialState,
  action: UserAuthAction,
): UserAuthState {
  switch (action.type) {
    case CHECK_IF_USER_IS_AUTHENTICATED: {
      const { isAuthenticated = false, token = '', user = {} } = action;

      return {
        ...state,
        isAuthenticated,
        token,
        id: user?.id ?? '',
        login: user?.login ?? '',
        firstname: user?.firstname ?? '',
        lastname: user?.lastname ?? '',
      };
    }

    case DISCONNECT_USER: {
      return {
        ...state,
        isAuthenticated: false,
        token: initialState.token,
        id: initialState.id,
        login: initialState.login,
        firstname: initialState.firstname,
        lastname: initialState.lastname,
      };
    }

    // user login (get token and userInfo)
    case REQUEST_LOG_USER: {
      return {
        ...state,
        isLogging: true,
      };
    }

    case RECEIVED_LOG_USER: {
      const {
        data: {
          token = '',
          id = '',
          login = '',
          firstname = '',
          lastname = '',
        },
      } = action;

      return {
        ...state,
        isAuthenticated: true,
        token: token,
        id: id,
        login: login,
        firstname: firstname,
        lastname: lastname,
        isLogging: false,
      };
    }

    case ERROR_LOG_USER: {
      return {
        ...state,
        isAuthenticated: false,
        isLogging: false,
      };
    }

    // not used right now:
    case REQUEST_USER_INFOS_DATA: {
      return {
        ...state,
        isFetching: true,
      };
    }

    case RECEIVED_USER_INFOS_DATA: {
      const {
        data: {
          userInfos = { id: '', login: '', firstname: '', lastname: '' },
        },
      } = action.payload;

      return {
        ...state,
        isFetching: false,
        id: userInfos.id,
        login: userInfos.login,
        firstname: userInfos.firstname,
        lastname: userInfos.lastname,
      };
    }

    case ERROR_USER_INFOS_DATA: {
      return {
        ...state,
        isFetching: false,
      };
    }

    default:
      return state;
  }
}
// #endregion

// #endregion

// #region ACTIONS CREATORS

// #region disconnect user
export function disconnectUser(): UserAuthAction {
  auth.clearAllAppStorage();
  return { type: 'DISCONNECT_USER' };
}
// #endregion

// #region check if user is connected
export function checkUserIsConnected(): ThunkAction<
  Promise<UserAuthAction>,
  RootState,
  unknown,
  AnyAction
> {
  return (dispatch) => {
    const token = auth.getToken();
    const user = auth.getUserInfo();
    const checkUserHasId = (obj: any) => !!obj?.id;
    const isExpired = auth.isExpiredToken(token);
    const isAuthenticated = token && checkUserHasId(user) ? true : false;
    const isStillAuthenticated = isAuthenticated && !isExpired;
    const actionTime = format(new Date(), 'dd/MM/yyyy HH:MM');

    dispatch({
      type: CHECK_IF_USER_IS_AUTHENTICATED,
      actionTime,
      token,
      ...user,
      isAuthenticated: isStillAuthenticated,
    });

    return {
      token,
      ...user,
      isAuthenticated: isStillAuthenticated,
    };
  };
}
// #endregion

// #region loguser

function logUser(
  login: string,
  password: string,
): ThunkAction<Promise<User>, RootState, unknown, AnyAction> {
  return async (dispatch) => {
    try {
      let actionTime = format(new Date(), 'dd/MM/yyyy HH:MM');
      dispatch({ type: REQUEST_LOG_USER, actionTime, login, password });

      // #region mocked request case:
      actionTime = format(new Date(), 'dd/MM/yyyy HH:MM');
      if (appConfig.DEV_MODE) {
        const { user } = await getMockedUser();
        dispatch({
          type: RECEIVED_LOG_USER,
          actionTime,
          data: user,
        });

        return user;
      }
      // #endregion

      // #region real request case:
      const { data } = await axios.request({
        method: 'post',
        url: `${getLocationOrigin()}/${login}`,
        withCredentials: true,
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'Acces-Control-Allow-Origin': '*',
        },
        data: {
          login,
          password,
        },
      });

      actionTime = format(new Date(), 'dd/MM/yyyy HH:MM');
      dispatch({
        type: RECEIVED_LOG_USER,
        actionTime,
        data,
      });
      return data;
      // #endregion
    } catch (error: any) {
      const actionTime = format(new Date(), 'dd/MM/yyyy HH:MM');
      dispatch({
        type: ERROR_LOG_USER,
        actionTime,
        error: error?.message ?? 'undefined error, no luck bro',
      });
    }
  };
}
function getMockedUser(): Promise<typeof userInfosMockData> {
  const mockResult = userInfosMockData; // will be fetch_mock data returned (in case FETCH_TYPE = 'FETCH_MOCK', otherwise cata come from server)
  return Promise.resolve(mockResult);
}
export function logUserIfNeeded(
  email: string,
  password: string,
): ThunkAction<Promise<User>, RootState, unknown, AnyAction> {
  return (dispatch, getState): Promise<any> => {
    const currentState = getState();

    // NOTE: check if it is worth requesting
    if (shouldLogUser(currentState, email)) {
      return dispatch(logUser(email, password));
    }

    // NOTE: user is already in state, just return current user
    const currentUser = getCurrentUser(currentState);
    return Promise.resolve({ ...currentUser });
  };
}
function shouldLogUser(state: RootState, userEmail: string): boolean {
  const { isLogging, login: currentUserEmail } = state.userAuth;

  if (!currentUserEmail || currentUserEmail !== userEmail) {
    return true;
  }

  return !isLogging;
}
// #endregion

// #region fetch user data
function fetchUserInfosData(
  id = '',
): ThunkAction<Promise<User>, RootState, unknown, AnyAction> {
  return async (dispatch) => {
    try {
      let actionTime = format(new Date(), 'dd/MM/yyyy HH:MM');
      dispatch({ type: REQUEST_USER_INFOS_DATA, actionTime });

      // #region mocked request case:
      actionTime = format(new Date(), 'dd/MM/yyyy HH:MM');
      if (appConfig.DEV_MODE) {
        const { user } = await getMockedUser();
        dispatch({
          type: RECEIVED_USER_INFOS_DATA,
          actionTime,
          data: user,
        });

        return user;
      }
      // #endregion

      // #region real request case:
      const { data } = await axios.request({
        method: 'get',
        url: `${getLocationOrigin()}/users/${id}`,
        withCredentials: true,
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'Acces-Control-Allow-Origin': '*',
          authorization: `Bearer ${auth.getToken() || ''}`,
        },
      });

      actionTime = format(new Date(), 'dd/MM/yyyy HH:MM');
      dispatch({
        type: RECEIVED_USER_INFOS_DATA,
        actionTime,
        data,
      });

      return data;
      // #endregion
    } catch (error) {
      const actionTime = format(new Date(), 'dd/MM/yyyy HH:MM');
      dispatch({ type: ERROR_USER_INFOS_DATA, actionTime, error });
    }
  };
}

export function fetchUserInfoDataIfNeeded(
  id = '',
): ThunkAction<Promise<User | null>, RootState, unknown, AnyAction> {
  return (dispatch, getState) => {
    const currentState = getState();
    if (shouldFetchUserInfoData(currentState)) {
      return dispatch(fetchUserInfosData(id));
    }

    return Promise.resolve(null);
  };
}

function shouldFetchUserInfoData(state: RootState): boolean {
  const { isFetching } = state.userAuth;
  return !isFetching;
}
// #endregion

function getCurrentUser(state: RootState): User {
  const { id, login, firstname, lastname, token, isAuthenticated } =
    state.userAuth;

  return {
    id,
    login,
    firstname,
    lastname,
    token,
    isAuthenticated,
  };
}
