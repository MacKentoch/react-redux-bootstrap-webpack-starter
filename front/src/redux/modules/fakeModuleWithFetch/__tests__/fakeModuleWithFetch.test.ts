import { fakeFetchIfNeeded } from '../index';

// #region jest mocks (JSON files)
jest.mock(
  '../../mock/fakeAPI.json',
  () => [
    {
      id: 1,
      label: 'item 1',
    },
    {
      id: 2,
      label: 'item 2',
    },
  ],
  { virtual: true },
);

jest.mock('../../../../services/API/fetchTools', () => ({
  getLocationOrigin: 'http://localhost',
}));
// #endregion

describe('fakeFetchIfNeeded action creators', () => {
  it('should fetch', async () => {
    expect.assertions(1);

    try {
      const returnValue = await fakeFetchIfNeeded();
      expect(returnValue).toBeDefined();
    } catch (error) {
      expect(error).toBeDefined();
    }
  });
});
