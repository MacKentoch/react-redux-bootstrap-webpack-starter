const nodeExternals = require('webpack-node-externals');
const path = require('path');

const { NODE_ENV = 'production' } = process.env;

module.exports = {
  target: 'node',
  mode: NODE_ENV,
  watch: NODE_ENV === 'development',
  entry: './src/server/in/index.ts',
  resolve: {
    extensions: ['.ts', '.js'],
  },
  output: {
    path: path.resolve(__dirname),
    filename: 'server.js',
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: ['ts-loader'],
      },
    ],
  },
  externals: [nodeExternals()],
};
