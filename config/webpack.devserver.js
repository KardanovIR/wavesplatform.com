const WebpackDevServer = require('webpack-dev-server');
const webpack = require('webpack');
// const fs = require('fs');
const path = require('path');
const webpackConfig = require('./webpack.front.config');
webpackConfig.plugins.push(new webpack.HotModuleReplacementPlugin());

const compiler = webpack(webpackConfig);

const server = new WebpackDevServer(compiler, {
  contentBase: path.resolve(__dirname, '../dist'),
  host: '127.0.0.1',
  port: '3000',
  hot: true,
  inline: true,
  historyApiFallback: false,

  proxy: {
    '**': 'http://localhost:3001',
  },

  clientLogLevel: 'info',

  // webpack-dev-middleware options
  quiet: false,
  noInfo: false,
  watchOptions: {
    aggregateTimeout: 300,
    poll: 1000,
  },
  // It's a required option.
  publicPath: '/static/',
  stats: { colors: true },
  open: true,
});
server.listen(3000, 'localhost', () => {});
