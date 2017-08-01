const webpack = require('webpack');
const path = require('path');
const fs = require('fs');


const includedDirectories = [
	path.join(__dirname, '../src/server'),
	path.join(__dirname, '../src/common')
];


const nodeModules = {};
fs.readdirSync('node_modules')
	.filter(function (x) {
		return ['.bin'].indexOf(x) === -1;
	})
	.forEach(function (mod) {
		nodeModules[mod] = 'commonjs ' + mod;
	});

module.exports = {
	entry: 'src/server/index',
	target: 'node',
	output: {
		path: path.join(__dirname, '../dist'),
		filename: 'app.js'
	},
	module: {
		rules: [
			{
				test: /\.pug?$/,
				loader: 'pug-loader',
				include: includedDirectories
			},
			{
				test: /\.jsx?$/,
				loader: 'babel-loader',
				include: includedDirectories
			},
			{
				test: /\.css$/,
				use: {
					loader: 'css-loader',
					options: {
						modules: true,
						locals: true,
						localIdentName: '[folder]__[local]__[hash:base64:5]'
					}
				},
				include: includedDirectories
			},
			{
				test: /\.scss$/,
				use: [
					{
						loader: "css-loader",
						options: {
							modules: true,
							locals: true,
							localIdentName: '[folder]__[local]__[hash:base64:5]',
							importLoaders: 1
						}
					},
					{
						loader: "sass-loader"
					}
				],
				include: includedDirectories
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
		extensions: ['.pug', '.jsx', '.js', '.tsx', '.ts', '.json', '.css', '.scss']
	},
	externals: nodeModules,
	// plugins: [
	// 	new webpack.BannerPlugin('require("source-map-support").install();',
	// 		{ raw: true, entryOnly: false })
	// ],
	devtool: 'inline-source-map'
};