import { createSelector } from 'reselect';

// #region base selectors (state or additionnal props)
export const UserAuthStateSelector = (state: RootState) => state.userAuth;
// #endregion

// #region consummed selectors
export function makeGetIsFetchingSelector() {
  const getIsFetching = createSelector(
    UserAuthStateSelector,
    (UserAuthState) => {
      const isFetching = UserAuthState.isFetching;
      return isFetching;
    },
  );

  return getIsFetching;
}

export function makeGetActionTimeSelector() {
  const getActionTime = createSelector(
    UserAuthStateSelector,
    (UserAuthState) => {
      const actionTime = UserAuthState.actionTime;
      return actionTime;
    },
  );

  return getActionTime;
}

export function makeGetIsLoggingSelector() {
  const getIsLogging = createSelector(
    UserAuthStateSelector,
    (UserAuthState) => {
      const isLogging = UserAuthState.isLogging;
      return isLogging;
    },
  );

  return getIsLogging;
}

export function makeGetIdSelector() {
  const getId = createSelector(UserAuthStateSelector, (UserAuthState) => {
    const id = UserAuthState.id;
    return id;
  });

  return getId;
}

export function makeGetLoginSelector() {
  const getLogin = createSelector(UserAuthStateSelector, (UserAuthState) => {
    const login = UserAuthState.login;
    return login;
  });

  return getLogin;
}

export function makeGetFirstnameSelector() {
  const getFirstname = createSelector(
    UserAuthStateSelector,
    (UserAuthState) => {
      const firstname = UserAuthState.firstname;
      return firstname;
    },
  );

  return getFirstname;
}

export function makeGetLastnameSelector() {
  const getLastname = createSelector(UserAuthStateSelector, (UserAuthState) => {
    const lastname = UserAuthState.lastname;
    return lastname;
  });

  return getLastname;
}

export function makeGetTokenSelector() {
  const getTokenSelector = createSelector(
    UserAuthStateSelector,
    (UserAuthState) => {
      const token = UserAuthState.token;
      return token;
    },
  );

  return getTokenSelector;
}

export function makeGetIsAuthenticatedSelector() {
  const getIsAuthenticatedSelector = createSelector(
    UserAuthStateSelector,
    (UserAuthState) => {
      const isAuthenticated = UserAuthState.isAuthenticated;
      return isAuthenticated;
    },
  );

  return getIsAuthenticatedSelector;
}
// #endregion
