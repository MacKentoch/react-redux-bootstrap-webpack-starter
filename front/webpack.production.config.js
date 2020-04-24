const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CompressionWebpackPlugin = require('compression-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const workboxPlugin = require('workbox-webpack-plugin');
const ModernizrWebpackPlugin = require('modernizr-webpack-plugin');

// #region constants
const nodeModulesDir = path.join(__dirname, 'node_modules');
const indexFile = path.join(__dirname, 'src/index.tsx');
// #endregion

const config = {
  target: 'web',
  mode: 'production',
  entry: { app: indexFile },
  output: {
    path: path.join(__dirname, '/../docs/assets'),
    publicPath: '/assets/',
    filename: '[name].[hash].js',
    chunkFilename: '[name].[hash].js',
  },
  resolve: {
    modules: ['src', 'node_modules'],
    extensions: ['.css', '.json', '.js', '.jsx', '.ts', '.tsx'],
  },
  module: {
    rules: [
      {
        test: /\.ts(x)?$/,
        use: ['awesome-typescript-loader'],
        exclude: [nodeModulesDir],
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
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
      new TerserPlugin({
        cache: true,
        parallel: true,
        sourceMap: true,
      }),
      new OptimizeCSSAssetsPlugin({}),
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      filename: '../index.html', // hack since outPut path would place in '/dist/assets/' in place of '/dist/'
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
    new ModernizrWebpackPlugin({
      htmlWebpackPlugin: true,
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[hash].css',
      chunkFilename: '[id].[hash].css',
    }),
    new CompressionWebpackPlugin({
      filename: '[path].gz[query]',
      algorithm: 'gzip',
      test: new RegExp('\\.(js|css)$'),
      threshold: 10240,
      minRatio: 0.8,
    }),
    // IPORTANT: we need to serve app through https otherwise SW will throw error (so no SW in this simple case)
    new workboxPlugin.GenerateSW({
      swDest: 'sw.js',
      clientsClaim: true,
      skipWaiting: true,
    }),
  ],
};

module.exports = config;
