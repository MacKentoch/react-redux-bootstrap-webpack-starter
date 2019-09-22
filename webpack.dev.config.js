const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const workboxPlugin = require('workbox-webpack-plugin');
const ModernizrWebpackPlugin = require('modernizr-webpack-plugin');
const nodeExternals = require('webpack-node-externals');

// #region constants
const nodeModulesDir = path.join(__dirname, 'node_modules');
const indexFile = path.join(__dirname, 'src/front/index.tsx');
// #endregion

const config = {
  mode: 'development',
  devtool: 'source-map',
  target: 'web',
  entry: {
    app: indexFile,
  },
  resolve: {
    modules: ['src/front', 'node_modules'],
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  externals: [nodeExternals()], // in order to ignore all modules in node_modules folder
  output: {
    path: path.join(__dirname, 'docs/assets'),
    publicPath: '/assets/',
    filename: '[name].[hash].js',
    chunkFilename: '[name].[hash].js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: [nodeModulesDir],
        use: ['react-hot-loader/webpack', 'babel-loader'],
      },
      {
        test: /\.tsx?$/,
        exclude: [nodeModulesDir],
        use: ['react-hot-loader/webpack', 'ts-loader'],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(eot|woff|woff2|ttf|svg|png|jpe?g|gif)(\?\S*)?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 100000,
              name: '[name].[ext]',
            },
          },
        ],
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
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/front/index.html',
      filename: '../index.html', // hack since outPut path would place in '/dist/assets/' in place of '/dist/'
    }),
    new ModernizrWebpackPlugin({
      htmlWebpackPlugin: true,
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[hash].css',
      chunkFilename: '[id].[hash].css',
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('dev'),
      },
    }),
    new workboxPlugin.GenerateSW({
      swDest: 'sw.js',
      clientsClaim: true,
      skipWaiting: true,
    }),
  ],
};

module.exports = config;
