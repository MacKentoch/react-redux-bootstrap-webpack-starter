const nodeExternals = require('webpack-node-externals');
const CopyPlugin = require('copy-webpack-plugin');
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
    path: path.resolve(__dirname, 'src/server/out'),
    filename: 'index.js',
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
  plugins: [
    new CopyPlugin([
      {
        from: 'src/server/in/config/*.json',
        transformPath(targetPath, absolutePath) {
          // we don't want all source path in out directory:
          return targetPath.split('/').pop();
        },
      },
    ]),
  ],
};
