/* eslint-disable @typescript-eslint/no-var-requires */
const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// #region constants
const nodeModulesDir = path.join(__dirname, 'node_modules');
const indexFile = path.join(__dirname, 'src/index.tsx');
// #endregion

const config = {
  mode: 'development',
  target: 'web',
  devtool: 'eval-source-map',
  entry: {
    app: [indexFile],
  },
  output: {
    path: path.join(__dirname, 'docs'),
    filename: '[name].[contenthash].js',
    chunkFilename: '[name].[chunkhash].js',
  },
  resolve: {
    modules: ['node_modules'],
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.css', '.json'],
  },
  module: {
    rules: [
      {
        test: /\.ts(x)?$/,
        use: ['ts-loader'],
        exclude: [nodeModulesDir],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(eot|woff|woff2|ttf|svg|png|jpe?g|gif)(\?\S*)?$/,
        type: 'asset',
      },
    ],
  },
  optimization: {
    runtimeChunk: false,
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
        styles: {
          name: 'styles',
          test: /\.css$/,
          chunks: 'all',
          enforce: true,
        },
      },
    },
  },
  devServer: {
    host: 'localhost',
    port: 3001,
    hot: true,
    static: path.join(__dirname, 'docs'),
    historyApiFallback: true, // browser refresh will fail otherwise
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
      'Access-Control-Allow-Headers':
        'X-Requested-With, content-type, Authorization',
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html',
      // filename: '../index.html', // hack since outPut path would place in '/dist/assets/' in place of '/dist/'
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development'),
    }),
  ],
};

module.exports = config;
