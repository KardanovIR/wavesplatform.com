const chalk = require('chalk');
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.front.config');


// add HMR stuff
config.entry = [
	'webpack-dev-server/client?http://0.0.0.0:3000',
	'webpack/hot/only-dev-server'
].concat(config.entry);
config.plugins.push(new webpack.HotModuleReplacementPlugin());

// launch server
new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true,
  contentBase: './public',
  proxy: {
	  '*': 'http://0.0.0.0:3001'
  }
}).listen(3000, 'localhost', function (err) {
  if (err) {
    return console.log(err);
  }
  console.log(chalk.green('Listening at http://0.0.0.0:3000/'));
});