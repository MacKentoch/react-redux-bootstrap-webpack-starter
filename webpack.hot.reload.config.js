const webpack = require('webpack');
const path = require('path');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
// const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

// #region constants
const nodeModulesDir = path.join(__dirname, 'node_modules');
const srcInclude = path.join(__dirname, 'src/front');
const srcExclude = path.join(__dirname, 'src/test');
const indexFile = path.join(__dirname, 'src/front/index.tsx');
// #endregion

const config = {
  mode: 'development',
  devtool: 'cheap-module-source-map',
  context: __dirname,
  entry: {
    app: [indexFile],
  },
  resolve: {
    // alias: {
    //   'react-dom': '@hot-loader/react-dom',
    // },
    modules: ['src/front', 'node_modules'],
    extensions: ['.css', '.json', '.js', '.jsx', '.ts', '.tsx'],
  },
  output: {
    path: path.resolve(__dirname, './docs/assets'),
    publicPath: 'http://localhost:3001/',
    filename: '[name].js',
    chunkFilename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: [nodeModulesDir],
        use: ['react-hot', 'babel-loader'],
      },
      {
        test: /\.ts(x?)$/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true,
            },
          },
        ],
        exclude: [nodeModulesDir],
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
      template: path.resolve(__dirname, './index.html'),
      filename: '../index.html', // hack since outPut path would place in '/dist/assets/' in place of '/dist/'
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('dev'),
      },
    }),
    new ForkTsCheckerWebpackPlugin({
      tsconfig: path.join(__dirname, 'src/tsconfig.json'),
      // transpileOnly: true,
      checkSyntacticErrors: false,
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
    new ProgressBarPlugin({
      format: 'Build [:bar] :percent (:elapsed seconds)',
      clear: false,
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
  devServer: {
    host: 'localhost',
    port: 3001,
    // hot: true,
    // noInfo: false,
    // quiet: false,
    historyApiFallback: true,
    contentBase: path.resolve(__dirname, '/docs'),
    publicPath: '/assets/',
    headers: { 'Access-Control-Allow-Origin': '*' },
  },
};

module.exports = config;
