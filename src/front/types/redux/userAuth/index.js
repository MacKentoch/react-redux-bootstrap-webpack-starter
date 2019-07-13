// @flow

import { type User } from '../../user';

export type State = {
  // actions details
  isFetching: false,
  isLogging: false,
  actionTime: '',

  isAuthenticated: boolean,
  token: string,
  id: string,
  firstname: string,
  lastname: string,

  ...any,
} & User;

export type UserAuthActions = {
  checkUserIsConnected: () => any,
  logUserIfNeeded: (email: string, password: string) => Promise<any>,
  fetchUserInfoDataIfNeeded: (id: string) => any,
  disconnectUser: () => any,
};
