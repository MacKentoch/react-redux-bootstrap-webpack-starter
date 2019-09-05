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
    app: [
      'react-hot-loader/patch',
      // 'webpack-dev-server/client?http://localhost:3001',
      // bundle the client for webpack-dev-server
      // and connect to the provided endpoint
      // 'webpack/hot/only-dev-server',
      // bundle the client for hot reloading
      // only- means to only hot reload for successful updates
      indexFile,
    ],
  },
  resolve: {
    modules: ['src/front', 'node_modules'],
    extensions: ['.css', '.json', '.js', '.jsx', '.ts', '.tsx'],
    'react-hot-loader/webpack'
    alias: {
      'react-dom': '@hot-loader/react-dom',
    },
  },
  output: {
    path: path.join(__dirname, 'docs/assets'),
    publicPath: 'http://localhost:3001/assets/',
    filename: '[name].js',
    chunkFilename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: [nodeModulesDir],
        use: ['react-hot-loader/webpack', 'babel-loader'],
      },
      {
        test: /\.(j|t)sx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true,
            },
          },
        ],
        // use: {
        //   loader: 'babel-loader',
        //   options: {
        //     cacheDirectory: true,
        //     babelrc: false,
        //     presets: [
        //       [
        //         '@babel/preset-env',
        //         { targets: { browsers: 'last 2 versions' } }, // or whatever your project requires
        //       ],
        //       '@babel/preset-typescript',
        //       '@babel/preset-react',
        //     ],
        //     plugins: [
        //       ['@babel/plugin-proposal-class-properties', { loose: true }],
        //       'react-hot-loader/babel',
        //     ],
        //   },
        // },
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
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('hot'),
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
    new webpack.NoEmitOnErrorsPlugin(),
  ],
  devServer: {
    port: 3001,
    hot: true, // enable HMR on the server
    noInfo: false,
    quiet: false,
    contentBase: path.join(__dirname, 'docs'),
    publicPath: '/assets/',
    historyApiFallback: true,
    headers: { 'Access-Control-Allow-Origin': '*' },
  },
};

module.exports = config;
