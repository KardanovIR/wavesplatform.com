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
        filename: 'app.js'
    },
    module: {
        rules: [
            ...createUrlLoaders({ emitFile: false }),
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                include: includedDirectories
            },
            {
                test: /\.json$/,
                loader: 'json-loader'
            },
            {
                test: /\.woff2$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        publicPath: 'static/',
                        name: path.join('fonts', '[name].[ext]'),
                        limit: 30000,
                    }
                }
            },
            {
                test: /\.woff$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        publicPath: 'static/',
                        name: path.join('fonts', '[name].[ext]'),
                        limit: 1 // always emit
                    }
                }
            },
        ]
    },
    resolve,
    externals: createExternals(),
    plugins: [
        new webpack.BannerPlugin({
            banner: 'require("source-map-support/register");', // the banner as string, it will be wrapped in a comment
            raw: true, // if true, banner will not be wrapped in a comment
            entryOnly: false, // if true, the banner will only be added to the entry chunks
        }),
        new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
        // new webpack.ContextReplacementPlugin(/^\.\/locale$/, context => {
        //     if (!/\/moment\//.test(context.context)) { return }
        //     // context needs to be modified in place
        //     Object.assign(context, {
        //         // include only CJK
        //         regExp: /^\.\/(ja|ko|zh)/,
        //         // point to the locale data folder relative to moment's src/lib/locale
        //         request: '../../locale'
        //     })
        // }),
    ],
    devtool: 'inline-source-map'
};