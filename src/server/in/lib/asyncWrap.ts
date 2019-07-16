import * as express from 'express';
import config from '../config';

// #region constants
const shouldLogErrors = config.get('debug');
// #endregino

/**
 * Returns a route handler for Express that calls the passed in function
 * @param  {Function} fn The asynchronous the route needs to call
 * @return {Promise}
 */

// $FlowIgnore
export default function(fn: Function) {
  if (fn.length <= 3) {
    // $FlowIgnore
    return function(
      req: express.Request,
      res: express.Response,
      next: express.NextFunction,
    ) {
      return fn(req, res, next).catch((error: any) => {
        if (shouldLogErrors) {
          console.log('middleware error: ', error);
        }
        next();
      });
    };
  } else {
    // $FlowIgnore
    return function(
      err: express.Errback,
      req: express.Request,
      res: express.Response,
      next: express.NextFunction,
    ) {
      return fn(err, req, res, next).catch((error: any) => {
        if (shouldLogErrors) {
          console.log('middleware error: ', error);
        }
        next();
      });
    };
  }
}
