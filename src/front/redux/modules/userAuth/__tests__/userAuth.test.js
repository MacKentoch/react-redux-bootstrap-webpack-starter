// @flow

// #region imports
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMiddleware from '../../../middleware/fetchMiddleware';
import { disconnectUser } from '../index';
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
  id: '',
  login: '',
  firstname: '',
  lastname: '',

  token: null,
  isAuthenticated: false, // authentication status (token based auth)
};
// #endregion

// #region jest mocks (JSON files)
jest.mock('../../../../services/API/fetchTools', () => ({
  getLocationOrigin: 'http://localhost',
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
});
