// @flow

// #region imports
import { format } from 'date-fns';
import { type Dispatch } from 'redux';
import fakeData from '../../../mock/fakeAPI.json';
import appConfig from '../../../config/appConfig';
import { getLocationOrigin } from '../../../services/API/fetchTools';
import { type State } from './fakeModuleWithFetch.types';
// #endregion

// #region CONSTANTS
const REQUEST_FAKE_FETCH = 'REQUEST_FAKE_FETCH';
const RECEIVED_FAKE_FETCH = 'RECEIVED_FAKE_FETCH';
const ERROR_FAKE_FETCH = 'ERROR_FAKE_FETCH';
// #endregion

// #region flow types
type ActionType =
  | 'REQUEST_FAKE_FETCH'
  | 'RECEIVED_FAKE_FETCH'
  | 'ERROR_FAKE_FETCH';

type Action = {
  type: ActionType,

  isFetching?: boolean,
  actionTime?: string,
  data?: { ...any } | Array<any>,
  error: { ...any },
};
// #endregion

// #region REDUCER

// #region initial state
const initialState: State = {
  isFetching: false,
  actionTime: '',
  data: [],
  error: {},
};
// #endregion

// #region reducer
export default function(state: State = initialState, action: Action): State {
  const currentTime = format(new Date());

  switch (action.type) {
    // #region request (fake)
    case REQUEST_FAKE_FETCH: {
      return {
        ...state,
        actionTime: currentTime,
        isFetching: true,
      };
    }

    case RECEIVED_FAKE_FETCH: {
      return {
        ...state,
        actionTime: currentTime,
        isFetching: false,
        data: [...action.payload],
      };
    }

    case ERROR_FAKE_FETCH: {
      return {
        ...state,
        actionTime: currentTime,
        isFetching: false,
        error: action.error ? { ...action.error } : {},
      };
    }
    // #endregion

    default:
      return state;
  }
}
// #endregion

// #endregion

// #region ACTIONS CREATORS

// #region fetch example
function fakeFetch() {
  return (dispatch: Dispatch<State>): Promise<any> => {
    const shouldFetchMock = appConfig.DEV_MODE;
    const fetchType = shouldFetchMock ? 'FETCH_MOCK' : 'FETCH';
    const mockResult = fakeData;

    const url = `${getLocationOrigin()}/${appConfig.api.fakeEndPoint}`;
    const method = 'get';
    const options = {};

    // fetch middleware
    // -> you handles pure front or with back-end asyncs just by disaptching a single object
    //   -> just change config: appConfig.DEV_MODE
    return Promise.resolve(
      dispatch({
        // type name is not important here since fetchMiddleware will intercept this action:
        type: 'FETCH_MIDDLEWARE',
        // here are fetch middleware props:
        fetch: {
          type: fetchType,
          actionTypes: {
            request: REQUEST_FAKE_FETCH,
            success: RECEIVED_FAKE_FETCH,
            fail: ERROR_FAKE_FETCH,
          },
          // props only used when type = FETCH_MOCK:
          mockResult,
          // props only used when type = FETCH:
          url,
          method,
          options,
        },
      }),
    );
  };
}

export function fakeFetchIfNeeded() {
  return (
    dispatch: Dispatch<State>,
    getState: () => { fakeModuleWithFetch: State, ...any },
  ): Promise<any> => {
    if (shouldFakeFetch(getState())) {
      return dispatch(fakeFetch());
    }
    return Promise.resolve();
  };
}

function shouldFakeFetch(state: {
  fakeModuleWithFetch: State,
  ...any,
}): boolean {
  const { isFetching } = state.fakeModuleWithFetch;

  if (isFetching) {
    return false;
  }
  return true;
}
// #endregion

// #endregion
