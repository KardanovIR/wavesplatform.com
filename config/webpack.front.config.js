'use strict';

const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');



const includedDirectories = [
	path.join(__dirname, '../src/public'),
	path.join(__dirname, '../src/common')
];


module.exports = {
	entry: [
		'src/public/index'
	],

	target: 'web',

	output: {
		path: path.join(__dirname, '../dist'),
		filename: '[name].js',
		publicPath: '/'
	},

	module: {
		rules: [
			{
				test: /\.jsx?$/,
				loader: 'babel-loader',
				include: includedDirectories
			},
			{
				test: /\.css$/,
				use: ExtractTextPlugin.extract({
					fallback: "style-loader",
					use: {
						loader: "css-loader",
						options: {
							modules: true,
							localIdentName: '[folder]__[local]__[hash:base64:5]'
						}
					},
					publicPath: "/dist"
				}),
				include: includedDirectories
			},
			{
				test: /\.scss$/,
				use: ExtractTextPlugin.extract({
					fallback: "style-loader",
					use: [
						{
							loader: "css-loader",
							options: {
								modules: true,
								localIdentName: '[folder]__[local]__[hash:base64:5]',
								importLoaders: 1
							}
						},
						{
							loader: "sass-loader"
						}
					],
					publicPath: "/dist"
				}),
				include: includedDirectories
			},
			{
				test: /\.svg$/,
				loader: 'svg-url-loader'
			},
			{
				test: /\.(png|jpg|jpeg|gif)$/,
				loader: "url-loader"
			},
			{
				test: /\.json$/,
				loader: 'json-loader'
			}
		]
	},

	resolve: {
		modules: [
			path.join(__dirname, '../'),
			'node_modules'
		],
		extensions: ['.jsx', '.js', '.tsx', '.ts', '.css', '.scss', '.less', '.json']
	},

	plugins: [
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': '"development"'
		}),
		new ExtractTextPlugin('styles.css')
	],

	devtool: '#inline-source-map'
};