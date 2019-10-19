import * as express from 'express';
import * as path from 'path';
import chalk from 'chalk';
import { error404, error500 } from '../middleware/errors';

// #region constants
const DOCS_PATH = '../../../docs/';
const port = process.env.PORT || 8082;
const host = process.env.SERVER_HOST || 'localhost';
// #endregion

const expressServer = (app: express.Application, isDev = false) => {
  if (!app) {
    console.log('Server application instance is undefined');
    throw new Error('Server application instance is undefined');
  }

  app.set('port', port);
  app.set('ipAdress', host);

  app.use(
    '/assets',
    express.static(path.join(__dirname, DOCS_PATH, 'assets/')),
  );

  app.get('/*', (req, res) =>
    res.sendFile(path.join(__dirname, DOCS_PATH, 'index.html')),
  );

  app.use(error404);
  app.use(error500);

  /* eslint-disable no-console */
  // @ts-ignore
  app.listen(port, host, () =>
    console.log(`
        =====================================================
        -> Server (${chalk.bgBlue('SPA')}) 🏃 (running) on ${chalk.green(
      host,
    )}:${chalk.green(`${port}`)}
        =====================================================
      `),
  );
  /* eslint-enable no-console */

  return app;
};

export default expressServer;
