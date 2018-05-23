// @flow

export type User = {
  id: '',
  login: '',
  firstname: '',
  lastname: '',
  token: null,
  isAuthenticated: boolean,
};

export type State = {
  // actions details
  isFetching: false,
  isLogging: false,
  time: '',

  ...any,
} & User;
