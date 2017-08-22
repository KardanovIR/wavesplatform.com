'use strict';

const path = require('path');
const webpack = require('webpack');

const patchEntriesHotReload = require('./utils/patchEntriesHotReload');

const createUrlLoaders = require('./lib/createUrlLoaders');


const includedDirectories = [
    path.join(__dirname, '../src/public'),
    path.join(__dirname, '../src/common'),
    /flexboxgrid/
];



module.exports = {
    entry: patchEntriesHotReload({
        main: 'src/public/entries/main',
        company: 'src/public/entries/company',
        developers: 'src/public/entries/developers',
        product: 'src/public/entries/product',
    }),

    target: 'web',

    output: {
        path: path.join(__dirname, '../dist'),
        filename: '[name].js',
        publicPath: '/'
    },

    module: {
        rules: [
            ...createUrlLoaders({ emitFile: true }),
            {
                test: /\.jsx?$/,
                use: [
                    'react-hot-loader/webpack',
                    'babel-loader',
                ],
                include: includedDirectories
            },
            {
                test: /\.css$/,
                use: [
                    "style-loader",
                    {
                        loader: "css-loader",
                        options: {
                            modules: true,
                            localIdentName: '[folder]__[local]__[hash:base64:5]'
                        }
                    }
                ],
                include: includedDirectories
            },
            {
                test: /\.scss$/,
                use: [
                    "style-loader",
                    {
                        loader: "css-loader",
                        options: {
                            modules: true,
                            localIdentName: '[folder]__[local]__[hash:base64:5]'
                        }
                    },
                    'sass-loader'
                ],
                include: includedDirectories
            },
            {
                test: /\.json$/,
                loader: 'json-loader'
            },
        ]
    },

    devServer: {
        host: '0.0.0.0',
        port: 3000,
        disableHostCheck: true,
        publicPath: '/',
        hot: true,
        historyApiFallback: true,
        contentBase: './public',
        proxy: {
            '*': 'http://0.0.0.0:3001'
        }
    },

    resolve: {
        modules: [
            path.join(__dirname, '../'),
            'node_modules'
        ],
        extensions: ['.jsx', '.js', '.css', '.scss', '.json']
    },

    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': '"development"',
            'NODE_ENV': '"development"'
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
        // new ExtractTextPlugin('styles.css')
    ],

    devtool: '#eval-source-map'
};