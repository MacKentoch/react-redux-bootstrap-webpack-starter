import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { ThunkAction } from 'redux-thunk';
import fetchMiddleware from '../../../middleware/fetchMiddleware';
import { disconnectUser, checkUserIsConnected, Action } from '../index';
import { State } from '../type';

// #region types
type Actions = ThunkAction<Promise<any>, State, void, Action>;
// #endregion

// #region constants
const middlewares = [thunk, fetchMiddleware];
const mockStore = configureMockStore<State, Actions>(middlewares);
const initialState: State = {
  // actions details
  isFetching: false,
  isLogging: false,

  // userInfos
  id: 'some_fake_id',
  login: '',
  firstname: '',
  lastname: '',
  token: 'fake_token_for_test',
  isAuthenticated: true, // authentication status (token based auth)
};
// #endregion

// #region jest mocks (JSON files)
jest.mock('../../../../services/API/fetchTools', () => ({
  getLocationOrigin: 'http://localhost',
}));

jest.mock('../../../../services/auth', () => ({
  getToken() {
    return 'fake_token_for_test';
  },

  getUserInfo() {
    return {
      _id: 'some_fake_id',
    };
  },

  clearAllAppStorage() {
    return true;
  },

  isExpiredToken() {
    return true;
  },
}));
// #endregion

describe('userAuth action creators', () => {
  let store: any = null;

  beforeEach(() => {
    store = mockStore(initialState);
  });

  it('disconnectUser should return valid action', async () => {
    const expectedAction = { type: 'DISCONNECT_USER' };

    const action = disconnectUser();
    expect(action).toEqual(expectedAction);
    store.dispatch(disconnectUser());
    const actions = store.getActions();
    const expectedPayload = { type: 'DISCONNECT_USER' };
    expect(actions).toEqual([expectedPayload]);
  });

  it('checkUserIsConnected should return valid action', async () => {
    const expectedAction = {
      type: 'CHECK_IF_USER_IS_AUTHENTICATED',
      _id: 'some_fake_id',
      token: 'fake_token_for_test',
      isAuthenticated: false,
    };
    store.dispatch(checkUserIsConnected());
    const actions = store.getActions();
    const expectedPayload = expectedAction;

    expect(actions).toEqual([expectedPayload]);
  });
});
