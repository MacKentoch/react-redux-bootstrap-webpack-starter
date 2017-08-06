const webpack           = require('webpack');
const path              = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const assetsDir       = path.join(__dirname, 'docs/public/assets');
const nodeModulesDir  = path.join(__dirname, 'node_modules');
const vendorsDir      = path.join(__dirname, 'src/app/vendors');
const indexFile       = path.join(__dirname, 'src/app/index.js');

const SPLIT_STYLE = true;

const config = {
  devtool: '#source-map',
  entry: {
    app: [
      'babel-polyfill',
      indexFile
    ],
    vendor: [
      'react',
      'react-dom',
      'prop-types',
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
    path:     assetsDir,
    filename: 'app.bundle.js'
  },
  module: {
    rules: [
      {
        test:     /\.jsx?$/,
        exclude:  [nodeModulesDir, vendorsDir],
        loader:   'babel-loader'
      },
      {
        test: /\.css$/,
        use:  SPLIT_STYLE 
          ? ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: [
              {loader: 'css-loader', options: { importLoaders: 1 }},
              'postcss-loader'
            ]
          })
          : [
            'style-loader',
            {loader: 'css-loader', options: { importLoaders: 1 }},
            'postcss-loader'
          ]
      },
      {
        test: /\.scss$/,
        use:  SPLIT_STYLE 
        ? ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {loader: 'css-loader', options: { importLoaders: 1 }},
            'postcss-loader',
            'sass-loader'
          ]
        })
        : [
          'style-loader',
          {loader: 'css-loader', options: { importLoaders: 1 }},
          'postcss-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(eot|woff|woff2|ttf|svg|png|jpe?g|gif)(\?\S*)?$/,
        use: [
          {
            loader:  'url-loader',
            options: {
              limit: 100000,
              name: '[name].[ext]'
            }
          }
        ]
      }
    ]
  },
  plugins: [
    getImplicitGlobals(),
    setNodeEnv(),
    new ExtractTextPlugin('app.styles.css'),
    new webpack.optimize.CommonsChunkPlugin({
      name:     'vendor',
      filename: 'app.vendor.bundle.js' 
    })
  ]
};

/*
* here using hoisting so don't use `var NAME = function()...`
*/
function getImplicitGlobals() {
  return new webpack.ProvidePlugin({
    $:      'jquery',
    jQuery: 'jquery',
    jquery: 'jquery'
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
