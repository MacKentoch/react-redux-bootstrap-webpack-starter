// @flow

const webpack = require('webpack');
const path = require('path');
const CompressionWebpackPlugin = require('compression-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const workboxPlugin = require('workbox-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin;

const assetsDir = path.join(__dirname, 'docs/public/assets');
const publicAssets = 'public/assets/';
const nodeModulesDir = path.join(__dirname, 'node_modules');
const indexFile = path.join(__dirname, 'src/front/index.js');

const config = {
  mode: 'production',
  entry: { app: indexFile },
  resolve: {
    modules: ['src/front', 'node_modules'],
    extensions: ['.js', 'jsx'],
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
        exclude: [nodeModulesDir],
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
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
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: true,
      }),
      new OptimizeCSSAssetsPlugin({}),
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
    new CompressionWebpackPlugin({
      asset: '[path].gz[query]',
      algorithm: 'gzip',
      test: new RegExp('\\.(js|css)$'),
      threshold: 10240,
      minRatio: 0.8,
    }),
    new workboxPlugin.GenerateSW({
      swDest: 'sw.js',
      clientsClaim: true,
      skipWaiting: true,
    }),
    new BundleAnalyzerPlugin(),
  ],
};

module.exports = config;
