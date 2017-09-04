'use strict';

const path = require('path');
const webpack = require('webpack');
const AssetsWebpackPlugin = require('assets-webpack-plugin');

const createUrlLoaders = require('./lib/createUrlLoaders');
const entry = require('./lib/entry');


const includedDirectories = [
    path.join(__dirname, '../src/public'),
    path.join(__dirname, '../src/common'),
];



module.exports = {
    entry,

    target: 'web',

    output: {
        path: path.join(__dirname, '../dist'),
        filename: '[name].[chunkhash].js',
        publicPath: '/'
    },

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
            // @todo extract text plugin
            // {
            //     test: /\.css$/,
            //     use: [
            //         "style-loader",
            //         {
            //             loader: "css-loader",
            //             options: {
            //                 modules: true,
            //                 localIdentName: '[folder]__[local]__[hash:base64:5]'
            //             }
            //         }
            //     ],
            //     include: includedDirectories
            // },
            {
                test: /\.json$/,
                loader: 'json-loader'
            },
        ]
    },

    resolve: {
        modules: [
            path.join(__dirname, '../'),
            'node_modules'
        ],
        extensions: ['.jsx', '.js', '.css', '.json']
    },

    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production'),
            'NODE_ENV': JSON.stringify('production'),
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

        // new ExtractTextPlugin('styles.css')
    ],

    devtool: 'cheap-module-source-map'
};