// @flow

// #region imports
import { type User } from '../../user';
// #endregion

export type State = {
  // actions details
  isFetching: false,
  isLogging: false,
  time: '',

  ...any,
} & User;

export type UserAuthActions = {
  disconnectUser: () => any,
  logUserIfNeeded: (email: string, password: string) => Promise<any>,
  fetchUserInfoDataIfNeeded: (id: string) => any,
};
