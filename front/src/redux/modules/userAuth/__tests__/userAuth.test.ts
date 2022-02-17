import configureMockStore from 'redux-mock-store';
import { format } from 'date-fns';
import thunk from 'redux-thunk';
import { disconnectUser, checkUserIsConnected } from '../index';

// #region constants
const middlewares = [thunk];
const mockStore = configureMockStore<UserAuthState, UserAuthActions>(
  middlewares,
);
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
  const newActionTime = format(new Date(), 'dd/MM/yyyy HH:MM');
  const initialState: UserAuthState = {
    // actions details
    isFetching: false,
    isLogging: false,
    actionTime: '',

    // userInfos
    id: 'some_fake_id',
    login: '',
    firstname: '',
    lastname: '',
    token: 'fake_token_for_test',
    isAuthenticated: true, // authentication status (token based auth)
  };

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
      actionTime: newActionTime,
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
