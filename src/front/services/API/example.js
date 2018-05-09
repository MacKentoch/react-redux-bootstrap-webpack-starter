// @flow

// #region imports
import axios from 'axios';
import {
  getMethod,
  jsonHeader,
  defaultOptions,
  getLocationOrigin,
} from './fetchTools';
// #endregion

export const getSomething = (
  endpoint = 'api/getSomethingByDefault',
): Promise<any> => {
  const method = getMethod.method;
  const headers = jsonHeader;
  const url = `${getLocationOrigin()}/${endpoint}`;
  const options = { ...defaultOptions };

  return axios
    .request({
      method,
      url,
      withCredentials: true,
      ...headers,
      ...options,
    })
    .then(data => data)
    .catch(error => Promise.reject(error));
};
