import * as express from 'express';

// #region constants
const shouldLogErrors = process.env.DEBUG || false;
// #endregion

/**
 * Returns a route handler for Express that calls the passed in function
 */
export default function(fn: Function) {
  if (fn.length <= 3) {
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
