'use strict';

// const path = require('path');
const webpack = require('webpack');

const createUrlLoaders = require('./lib/createUrlLoaders');
const entry = require('./lib/entry');
const output = require('./lib/output');
const resolve = require('./lib/resolve');
const includedDirectories = require('./lib/includedDirectories');



module.exports = {
    entry,

    target: 'web',

    output,

    module: {
        rules: [
            ...createUrlLoaders({ emitFile: true }),
            {
                test: /\.jsx?$/,
                use: [
                    'babel-loader',
                ],
                include: includedDirectories
            },
            {
                test: /\.json$/,
                loader: 'json-loader'
            },
        ]
    },

    resolve,

    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': '"development"',
            'NODE_ENV': '"development"'
        }),
        new webpack.NamedModulesPlugin(),
    ],

    devtool: '#eval-source-map'
};