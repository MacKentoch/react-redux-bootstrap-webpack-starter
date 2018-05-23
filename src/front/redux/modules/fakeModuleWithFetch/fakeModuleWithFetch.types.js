// @flow

export type State = {
  isFetching?: boolean,
  actionTime?: string,
  data?: { ...any } | Array<any>,
  error: { ...any },

  ...any,
};
