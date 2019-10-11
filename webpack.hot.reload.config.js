const webpack = require('webpack');
const path = require('path');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const { TsConfigPathsPlugin } = require('awesome-typescript-loader');

// #region constants
const nodeModulesDir = path.join(__dirname, 'node_modules');
const srcInclude = path.join(__dirname, 'src/front');
const srcExclude = path.join(__dirname, 'src/test');
const indexFile = path.join(__dirname, 'src/front/index.tsx');
// #endregion

// const config = {
//   mode: 'development',
//   target: 'web',
//   devtool: 'eval-source-map',
//   context: __dirname,
//   entry: {
//     app: [indexFile],
//   },
//   resolve: {
//     modules: ['src/front', 'node_modules'],
//     extensions: ['.css', '.json', '.js', '.jsx', '.ts', '.tsx'],
//     // alias: {
//     //   'react-dom': '@hot-loader/react-dom',
//     // },
//   },
//   output: {
//     path: path.join(__dirname, 'docs'),
//     filename: '[name].js',
//     chunkFilename: '[name].js',
//   },
//   module: {
//     rules: [
//       // {
//       //   test: /\.jsx?$/,
//       //   exclude: [nodeModulesDir, srcExclude],
//       //   use: ['react-hot-loader/webpack', 'babel-loader'],
//       // },
//       // {
//       //   test: /\.ts(x?)$/,
//       //   exclude: [nodeModulesDir, srcExclude],
//       //   use: [
//       //     {
//       //       loader: 'react-hot-loader/webpack',
//       //     },
//       //     {
//       //       loader: 'ts-loader',
//       //       options: {
//       //         transpileOnly: true,
//       //       },
//       //     },
//       //   ],
//       // },
//       {
//         test: /\.(j|t)s(x)?$/,
//         exclude: /node_modules/,
//         use: {
//           loader: 'babel-loader',
//           options: {
//             cacheDirectory: true,
//             babelrc: false,
//             presets: [
//               [
//                 '@babel/preset-env',
//                 { targets: { browsers: 'last 2 versions' } }, // or whatever your project requires
//               ],
//               '@babel/preset-typescript',
//               '@babel/preset-react',
//             ],
//             plugins: [
//               // plugin-proposal-decorators is only needed if you're using experimental decorators in TypeScript
//               // ['@babel/plugin-proposal-decorators', { legacy: true }],
//               ['@babel/plugin-proposal-class-properties', { loose: true }],
//               'react-hot-loader/babel',
//             ],
//           },
//         },
//       },
//       {
//         test: /\.css$/,
//         use: ['style-loader', 'css-loader'],
//       },
//       {
//         test: /\.(eot|woff|woff2|ttf|svg|png|jpe?g|gif)(\?\S*)?$/,
//         use: [
//           {
//             loader: 'url-loader',
//             options: {
//               limit: 100000,
//               name: '[name].[ext]',
//             },
//           },
//         ],
//       },
//     ],
//   },
//   // optimization: {
//   //   runtimeChunk: false,
//   //   splitChunks: {
//   //     cacheGroups: {
//   //       commons: {
//   //         test: /[\\/]node_modules[\\/]/,
//   //         name: 'vendors',
//   //         chunks: 'all',
//   //       },
//   //       styles: {
//   //         name: 'styles',
//   //         test: /\.css$/,
//   //         chunks: 'all',
//   //         enforce: true,
//   //       },
//   //     },
//   //   },
//   // },
//   plugins: [
//     new ForkTsCheckerWebpackPlugin({
//       tsconfig: path.join(__dirname, '/src/tsconfig.json'),
//       checkSyntacticErrors: false,
//     }),
//     new webpack.HotModuleReplacementPlugin(),
//     new HtmlWebpackPlugin({
//       template: 'index.html',
//     }),
//     new webpack.DefinePlugin({
//       'process.env': {
//         NODE_ENV: JSON.stringify('dev'),
//       },
//     }),
//     new MiniCssExtractPlugin({
//       filename: '[name].css',
//       chunkFilename: '[id].css',
//     }),
//     new ProgressBarPlugin({
//       format: 'Build [:bar] :percent (:elapsed seconds)',
//       clear: false,
//     }),
//   ],
//   devServer: {
//     host: 'localhost',
//     port: 3001,
//     historyApiFallback: true,
//     contentBase: path.join(__dirname, 'docs'),
//     headers: { 'Access-Control-Allow-Origin': '*' },
//   },
// };

const config = {
  entry: ['./src/front'],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  resolve: {
    modules: ['node_modules'],
    alias: {
      'react-dom': '@hot-loader/react-dom',
    },
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.ts(x)?$/,
        exclude: [nodeModulesDir],
        use: ['awesome-typescript-loader'],
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
  devtool: 'eval-source-map',
  plugins: [
    new TsConfigPathsPlugin({
      configFileName: path.join(__dirname, '/src/tsconfig.json'),
    }),
    new HtmlWebpackPlugin({
      template: 'index.html',
    }),
    new webpack.NamedModulesPlugin(),
  ],
};

module.exports = config;
