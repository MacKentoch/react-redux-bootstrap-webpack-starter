// @flow

// #region imports
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMiddleware from '../../../middleware/fetchMiddleware';
import { disconnectUser, checkUserIsConnected } from '../index';
// #endregion

// #region constants
const middlewares = [thunk, fetchMiddleware];
const mockStore = configureMockStore(middlewares);
const initialState = {
  // actions details
  isFetching: false,
  isLogging: false,
  time: '',

  // userInfos
  id: 'some_fake_id',
  _id: 'some_fake_id',
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
}));
// #endregion

describe('userAuth action creators', () => {
  let store = null;

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
      isAuthenticated: true,
    };

    store.dispatch(checkUserIsConnected());
    const actions = store.getActions();
    const expectedPayload = expectedAction;

    expect(actions).toEqual([expectedPayload]);
  });
});
