const webpack = require('webpack');
const path = require('path');

const createUrlLoaders = require('./lib/createUrlLoaders');
const createExternals = require('./lib/createExternals');

const resolve = require('./lib/resolve');

const includedDirectories = [
  path.join(__dirname, '../src/server'),
  path.join(__dirname, '../src/common'),
  path.join(__dirname, '../src/public'),
];

module.exports = {
  entry: 'src/server/index',
  target: 'node',
  output: {
    path: path.join(__dirname, '../dist'),
    filename: 'app.js',
  },
  module: {
    rules: [
      ...createUrlLoaders({ emitFile: false }),
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        include: includedDirectories,
      },
      {
        test: /\.json$/,
        loader: 'json-loader',
      },
      {
        test: /\.woff2$/,
        use: {
          loader: 'url-loader',
          options: {
            publicPath: '/static/',
            name: path.join('fonts', '[name].[ext]'),
            limit: 30000,
          },
        },
      },
      {
        test: /\.woff$/,
        use: {
          loader: 'url-loader',
          options: {
            publicPath: '/static/',
            name: path.join('fonts', '[name].[ext]'),
            limit: 1, // always emit
          },
        },
      },
      {
        test: /\.css$/,
        loader: 'null-loader',
      },
    ],
  },
  resolve,
  externals: createExternals(),
  plugins: [
    new webpack.BannerPlugin({
      banner: 'require("source-map-support/register");', // the banner as string, it will be wrapped in a comment
      raw: true, // if true, banner will not be wrapped in a comment
      entryOnly: false, // if true, the banner will only be added to the entry chunks
    }),
  ],
  devtool: 'inline-source-map',
};
