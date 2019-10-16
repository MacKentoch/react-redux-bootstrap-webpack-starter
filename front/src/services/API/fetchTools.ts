import { Base64 } from 'js-base64';

// #region  window.location.origin polyfill
export const getLocationOrigin = (): string => {
  if (!window.location.origin) {
    // @ts-ignore
    window.location.origin = `${window.location.protocol}//${
      window.location.hostname
    }${window.location.port ? ':' + window.location.port : ''}`;
  }
  return window.location.origin;
};
// #endregion

// #region query options:
export const getMethod = {
  method: 'get',
};

export const postMethod = {
  method: 'post',
};

export const defaultOptions = {
  credentials: 'same-origin',
};

export const jsonHeader = {
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    // 'Access-control-Allow-Origin': '*'
  },
};
// #endregion

// #region general helpers
export const encodeBase64 = (stringToEncode: string = ''): string => {
  return Base64.encode(stringToEncode);
};
// #endregion
