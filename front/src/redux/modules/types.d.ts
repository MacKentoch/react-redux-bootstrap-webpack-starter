import * as FakeModuleWithAuth from './fakeModuleWithFetch/type';
import * as UserAuth from './userAuth/type';

export type RootState = {
  fakeModuleWithFetch: FakeModuleWithAuth.State,
  userAuth: UserAuth.State,
};
