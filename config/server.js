const chalk = require('chalk');
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.front.config');


// add HMR stuff
Object.keys(config.entry).forEach(key => {
    config.entry[key] = [
        config.entry[key],
        'webpack/hot/only-dev-server'
    ]
});
config.entry.devServerClient = 'webpack-dev-server/client?http://0.0.0.0:3000';

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
}).listen(3000, '0.0.0.0', function (err) {
    if (err) {
        return console.log(err);
    }
    console.log(chalk.green('Listening at http://0.0.0.0:3000/'));
});