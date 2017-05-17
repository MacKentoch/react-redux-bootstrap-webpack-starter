const webpack           = require('webpack');
const path              = require('path');
const autoprefixer      = require('autoprefixer');
const precss            = require('precss');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const assetsDir       = path.join(__dirname, 'docs/public/assets');
const nodeModulesDir  = path.join(__dirname, 'node_modules');
const vendorsDir      = path.join(__dirname, 'src/app/vendors');
const indexFile       = path.join(__dirname, 'src/app/index.js');

const SPLIT_STYLE = true;

const config = {
  devtool: '#source-map',
  // debug: true,
  entry: {
    app: indexFile,
    vendor: [
      'react',
      'react-dom',
      'react-tap-event-plugin',
      'react-hot-loader',
      'babel-polyfill',
      'jquery',
      'bootstrap/dist/js/bootstrap.min.js',
      'redux',
      'react-router-redux',
      'redux-logger',
      'redux-thunk',
      'react-router',
      'react-router-redux',
      'classnames',
      'axios',
      'js-base64',
      'moment',
      'react-bootstrap',
      'react-modal',
      'react-motion',
      'react-notification'
    ]
  },
  output: {
    path: assetsDir,
    filename: 'app.bundle.js'
  },
  module: {
    // // when using flow 
    // preLoaders: [{
    //   test: /\.jsx?$/,
    //   loader: 'remove-flow-types',
    //   include: srcDir,
    //   exclude: [nodeModulesDir, vendorsDir]
    // }],
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: [nodeModulesDir, vendorsDir],
        loader: 'babel'
      },
      {
        test: /\.css$/,
        loader: SPLIT_STYLE ? ExtractTextPlugin.extract('style-loader', 'css-loader!postcss-loader') : 'style!css!postcss'
      },
      {
        test: /\.scss$/,
        loader: SPLIT_STYLE ? ExtractTextPlugin.extract('style-loader', 'css-loader!postcss-loader!sass-loader') : 'style!css!postcss!sass'
      },
      {
        test: /\.json$/,
        loader: 'json'
      },
      {
        test: /\.(eot|woff|woff2|ttf|svg|png|jpe?g|gif)(\?\S*)?$/,
        loader: 'url?limit=100000&name=[name].[ext]'
      }
    ]
  },
  postcss: function () {
    return [precss, autoprefixer({ browsers: ['last 2 versions'] })];
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    getImplicitGlobals(),
    setNodeEnv(),
    new ExtractTextPlugin('app.styles.css'),
    new webpack.optimize.CommonsChunkPlugin('vendor', 'app.vendor.bundle.js')
  ]
};

/*
* here using hoisting so don't use `var NAME = function()...`
*/
function getImplicitGlobals() {
  return new webpack.ProvidePlugin({
    $: 'jquery',
    jQuery: 'jquery'
  });
}

function setNodeEnv() {
  return new webpack.DefinePlugin({
    'process.env': {
      'NODE_ENV': JSON.stringify('dev')
    }
  });
}

module.exports = config;
