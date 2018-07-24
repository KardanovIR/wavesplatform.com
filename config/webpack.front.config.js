'use strict';

// const path = require('path');
const webpack = require('webpack');

const createFrontendLoaders = require('./lib/createFrontendLoaders');
const entry = require('./lib/entry');
const output = require('./lib/output');
const resolve = require('./lib/resolve');
const includedDirectories = require('./lib/includedDirectories');

module.exports = {
  entry,

  target: 'web',

  output,

  module: {
    rules: createFrontendLoaders(includedDirectories),
  },

  resolve,

  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
      NODE_ENV: JSON.stringify(process.env.NODE_ENV),
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
  ],

  devtool: '#eval-source-map',
};
