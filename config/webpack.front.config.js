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
        new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
        // new webpack.ContextReplacementPlugin(/^\.\/locale$/, context => {
        //     if (!/\/moment\//.test(context.context)) { return }
        //     // context needs to be modified in place
        //     Object.assign(context, {
        //         // include only CJK
        //         regExp: /^\.\/(en)/,
        //         // point to the locale data folder relative to moment's src/lib/locale
        //         request: '../../locale'
        //     })
        // })
    ],

    devtool: '#eval-source-map'
};