// @flow

const path = require('path');
const convict = require('convict');

const config = convict({
  env: {
    doc: 'The application environment',
    format: ['development', 'production'],
    default: 'development',
    env: 'NODE_ENV',
  },
  debug: {
    doc: 'Global debug toggle',
    format: Boolean,
    default: false,
    env: 'DEBUG',
  },
  server: {
    host: {
      doc: 'The server url',
      format: 'url',
      default: 'localhost',
      env: 'SERVER_HOST',
    },
    port: {
      doc: 'The server port number',
      format: 'port',
      default: 3001,
      env: 'PORT',
    },
  },
});

const env = config.get('env');
config.loadFile(path.join(__dirname, `./${env}.json`));
config.validate();

module.exports = config;
