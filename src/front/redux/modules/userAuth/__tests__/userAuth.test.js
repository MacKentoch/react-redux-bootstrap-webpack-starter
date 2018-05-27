// @flow

// #region imports
import { disconnectUser } from '../index';
// #endregion

// #region jest mocks (JSON files)
jest.mock('../../../../services/API/fetchTools', () => ({
  getLocationOrigin: 'http://localhost',
}));
// #endregion

describe('userAuth action creators', () => {
  it('disconnectUser should return valid action', async () => {
    const expectedAction = { type: 'DISCONNECT_USER' };

    const action = disconnectUser();
    expect(action).toEqual(expectedAction);
  });
});
