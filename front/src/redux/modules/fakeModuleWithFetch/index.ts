import { format } from 'date-fns';
import { ThunkAction } from 'redux-thunk';
import fakeData from '../../../mock/fakeAPI.json';
import appConfig from '../../../config/appConfig';
import { getLocationOrigin } from '../../../services/API/fetchTools';
import { State } from './type';

// #region CONSTANTS
const REQUEST_FAKE_FETCH = 'REQUEST_FAKE_FETCH';
const RECEIVED_FAKE_FETCH = 'RECEIVED_FAKE_FETCH';
const ERROR_FAKE_FETCH = 'ERROR_FAKE_FETCH';
// #endregion

// #region flow types
type ActionType =
  | 'FETCH'
  | 'REQUEST_FAKE_FETCH'
  | 'RECEIVED_FAKE_FETCH'
  | 'ERROR_FAKE_FETCH';

type PartialState = Partial<State>;

type Action = {
  type: ActionType,
  isFetching?: boolean,
  actionTime?: string,
  data?: Array<any> | any,
  error?: any,
  payload?: Array<any> | any,
} & PartialState;
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
export default function(
  state: State = initialState,
  action: Partial<Action>,
): State {
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
      const { payload = [] } = action;
      return {
        ...state,
        actionTime: currentTime,
        isFetching: false,
        data: [...payload],
      };
    }

    case ERROR_FAKE_FETCH: {
      const { error = {} } = action;
      return {
        ...state,
        actionTime: currentTime,
        isFetching: false,
        error: { ...error },
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
type FakeFetchAction = ThunkAction<Promise<any>, State, void, {} & Action>;
function fakeFetch(): FakeFetchAction {
  return dispatch => {
    const shouldFetchMock = appConfig.DEV_MODE;
    const fetchType = shouldFetchMock ? 'FETCH_MOCK' : 'FETCH';
    const mockResult = fakeData;

    const url = `${getLocationOrigin()}/${appConfig.api.fakeEndPoint}`;
    const method = 'get';
    const options = {};

    // fetch middleware
    // -> you handles pure front or with back-end asyncs just by disaptching a single object
    //   -> just change config: appConfig.DEV_MODE
    const type: ActionType = 'FETCH';
    return Promise.resolve(
      dispatch({
        // type name is not important here since fetchMiddleware will intercept this action:
        type,
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

export function fakeFetchIfNeeded(): FakeFetchAction {
  return (dispatch, getState): Promise<any> => {
    if (shouldFakeFetch(getState())) {
      return dispatch(fakeFetch());
    }
    return Promise.resolve();
  };
}

function shouldFakeFetch(state: { fakeModuleWithFetch: State } & any): boolean {
  const { isFetching } = state.fakeModuleWithFetch;
  return !isFetching;
}
// #endregion

// #endregion
