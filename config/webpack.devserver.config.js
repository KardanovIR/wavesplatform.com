const path = require('path');
const webpackConfig = require('./webpack.front.config');

module.exports = {
  ...webpackConfig,

  devtool: 'inline-eval-cheap-source-map',
  cache: true,
  devServer: {
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
  },
};
