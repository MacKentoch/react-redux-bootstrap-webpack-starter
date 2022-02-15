import { Base64 } from 'js-base64';
import { Method } from 'axios';

export type GetMethod = {
  method: Method;
};

export type PostMethod = GetMethod;

// #region  window.location.origin polyfill
export const getLocationOrigin = (): string => {
  if (!window.location.origin) {
    const windowLocationOrigin = `${window.location.protocol}//${
      window.location.hostname
    }${window.location.port ? ':' + window.location.port : ''}`;
    return windowLocationOrigin;
  }
  return window.location.origin;
};
// #endregion

// #region query options:
export const getMethod: GetMethod = {
  method: 'get',
};

export const postMethod: PostMethod = {
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
export const encodeBase64 = (stringToEncode = ''): string => {
  return Base64.encode(stringToEncode);
};
// #endregion
