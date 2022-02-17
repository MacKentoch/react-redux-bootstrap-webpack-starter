declare type UserAuthState = {
  isFetching: boolean;
  actionTime: string;
  isLogging: boolean;
} & User;

declare type UserAuthAction = {
  type: ActionType;

  data?: Array<any> | any;
  error?: any;
  payload?: any;
} & Partial<UserAuthState> &
  Partial<{ user: Partial<User> }>;

declare type UserAuthActions = {
  checkUserIsConnected: () => void;
  logUserIfNeeded: (email: string, password: string) => Promise<User>;
  fetchUserInfoDataIfNeeded: (id: string) => Promise<User | null>;
  disconnectUser: () => void;
};
