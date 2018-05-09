// @flow

// $FlowIgnore
exports.error404 = (req, res, next) => {
  console.log('req.url: ', req.url);

  const err = new Error('Not found');
  // $FlowIgnore
  err.status = 404;
  next(err);
};

// $FlowIgnore
exports.error500 = (err, req, res, next) => {
  if (err.status === 404) {
    res.status(404).send('Sorry nothing here for now...');
  }

  console.error(err);
  res.status(500).send('internal server error');
};
