type State = {
  // actions details
  isFetching: false,
  isLogging: false,
  actionTime: '',

  isAuthenticated: boolean,
  token: string,
  id: string,
  firstname: string,
  lastname: string,
} & User;

type UserAuthActions = {
  checkUserIsConnected: () => any,
  logUserIfNeeded: (email: string, password: string) => Promise<any>,
  fetchUserInfoDataIfNeeded: (id: string) => any,
  disconnectUser: () => any,
};
