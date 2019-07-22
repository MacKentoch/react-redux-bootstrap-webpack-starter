import axios from 'axios';
import {
  getMethod,
  jsonHeader,
  defaultOptions,
  getLocationOrigin,
} from './fetchTools';

export const getSomething = async (
  endpoint: string = 'api/getSomethingByDefault',
): Promise<any> => {
  const method = getMethod.method;
  const headers = jsonHeader;
  const url = `${getLocationOrigin()}/${endpoint}`;
  const options = { ...defaultOptions };

  const data = await axios.request({
    method,
    url,
    withCredentials: true,
    ...headers,
    ...options,
  });
  return data;
};
