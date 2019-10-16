export type State = {
  isFetching: boolean,
  isLogging: boolean,
} & User;

export type UserAuthActions = {
  checkUserIsConnected: () => any,
  logUserIfNeeded: (email: string, password: string) => Promise<any>,
  fetchUserInfoDataIfNeeded: (id: string) => any,
  disconnectUser: () => any,
};
