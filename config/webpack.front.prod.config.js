'use strict';

const path = require('path');
const webpack = require('webpack');
const AssetsWebpackPlugin = require('assets-webpack-plugin');

const createFrontendLoaders = require('./lib/createFrontendLoaders');
const entry = require('./lib/entry');
const output = require('./lib/output');
const resolve = require('./lib/resolve');
const includedDirectories = require('./lib/includedDirectories');



module.exports = {
    entry,

    target: 'web',

    output: Object.assign({}, output, {
        filename: '[name].[chunkhash].js'
    }),

    module: {
        rules: createFrontendLoaders(includedDirectories),
    },

    resolve,

    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
            'NODE_ENV': JSON.stringify(process.env.NODE_ENV),
        }),
        new webpack.optimize.ModuleConcatenationPlugin(),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            filename: 'vendor.[chunkhash].js',
            minChunks(module) {
                return module.context && module.context.indexOf('node_modules') >= 0;
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
                screw_ie8: true,
                conditionals: true,
                unused: true,
                comparisons: true,
                sequences: true,
                dead_code: true,
                evaluate: true,
                if_return: true,
                join_vars: true
            },
            output: {
                comments: false
            }
        }),
        new webpack.HashedModuleIdsPlugin(),

        new AssetsWebpackPlugin({ path: path.join(__dirname, '..','dist'), filename: 'assets.json' })
    ],

    devtool: 'cheap-module-source-map'
};
