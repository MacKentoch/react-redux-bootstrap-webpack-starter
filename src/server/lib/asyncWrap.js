// @flow

// #region imports
import config from '../../../config';
// #endregion

// #region constants
const shouldLogErrors = config.get('debug');
// #endregino

/**
 * Returns a route handler for Express that calls the passed in function
 * @param  {Function} fn The asynchronous the route needs to call
 * @return {Promise}
 */

// $FlowIgnore
export default function(fn) {
  if (fn.length <= 3) {
    // $FlowIgnore
    return function(req, res, next) {
      return fn(req, res, next).catch(error => {
        if (shouldLogErrors) {
          console.log('middleware error: ', error);
        }
        next();
      });
    };
  } else {
    // $FlowIgnore
    return function(err, req, res, next) {
      return fn(err, req, res, next).catch(error => {
        if (shouldLogErrors) {
          console.log('middleware error: ', error);
        }
        next();
      });
    };
  }
}
