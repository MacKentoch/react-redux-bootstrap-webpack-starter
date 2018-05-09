// @flow

// #region imports
const express = require('express');
const path = require('path');
const chalk = require('chalk');
const { error404, error500 } = require('../middleware/errors');
const config = require('../config');
// #endregion

// #region constants
const DOCS_PATH = '../../../docs/';
// #endregion

// $FlowIgnore
const expressServer = (app = null, isDev = false) => {
  if (!app) {
    console.log('Server application instance is undefined');
    throw new Error('Server application instance is undefined');
  }

  app.set('port', config.get('server.port'));
  app.set('ipAdress', config.get('server.host'));

  app.use(
    '/public/assets/',
    express.static(path.join(__dirname, DOCS_PATH, 'public/assets/')),
  );

  app.get('/*', (req, res) =>
    res.sendFile(path.join(__dirname, DOCS_PATH, 'index.html')),
  );

  app.use(error404);
  app.use(error500);

  /* eslint-disable no-console */
  app.listen(config.get('server.port'), config.get('server.host'), () =>
    console.log(`
        =====================================================
        -> Server (${chalk.bgBlue('SPA')}) 🏃 (running) on ${chalk.green(
      config.get('server.host'),
    )}:${chalk.green(config.get('server.port'))}
        =====================================================
      `),
  );
  /* eslint-enable no-console */

  return app;
};

module.exports = expressServer;
