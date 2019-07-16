import * as express from 'express';

type ErrorWithStatus = {
  status?: number,
  message?: string,
};

export const error404 = (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction,
) => {
  console.log('req.url: ', req.url);

  const err: ErrorWithStatus = new Error('Not found');
  err.status = 404;
  next(err);
};

export const error500 = (
  err: express.Errback & ErrorWithStatus,
  req: express.Request,
  res: express.Response,
  next: express.NextFunction,
) => {
  if (err.status === 404) {
    res.status(404).send('Sorry nothing here for now...');
  }

  console.error(err);
  res.status(500).send('internal server error');
};
