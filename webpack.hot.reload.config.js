// @flow

const webpack = require('webpack');
const path = require('path');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');

const assetsDir = path.join(__dirname, 'docs/public/assets');
const rootPath = path.join(__dirname, 'docs');
const publicAssets = 'public/assets/';
const nodeModulesDir = path.join(__dirname, 'node_modules');
const srcInclude = path.join(__dirname, 'src/front');
const indexFile = path.join(__dirname, 'src/front/index.js');

const config = {
  mode: 'development',
  devtool: 'cheap-module-source-map',
  entry: {
    app: ['react-hot-loader/patch', indexFile],
  },
  resolve: {
    modules: ['src/front', 'node_modules'],
    extensions: ['*', '.js', '.jsx'],
  },
  output: {
    path: assetsDir,
    publicPath: publicAssets,
    filename: '[name].js',
    chunkFilename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: srcInclude,
        exclude: [nodeModulesDir],
        loaders: ['babel-loader'],
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
      },
    },
  },
  plugins: [
    new ProgressBarPlugin({
      format: 'Build [:bar] :percent (:elapsed seconds)',
      clear: false,
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
  ],
  devServer: {
    contentBase: rootPath,
    port: 3001,
    hot: true,
    historyApiFallback: true,
  },
};

module.exports = config;
