const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const Dotenv = require('dotenv-webpack')

module.exports = {
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, './dist'),
		filename: 'boundle.js',
	},
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'),
		},
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env', '@babel/preset-react'],
						plugins: [
							'@babel/plugin-transform-runtime',
							[
								'@babel/plugin-proposal-pipeline-operator',
								{ proposal: 'minimal' },
							],
						],
					},
				},
			},
			{
				test: /\.s[ca]ss$/,
				use: ['style-loader', 'css-loader', 'sass-loader'],
			},
			{
				test: /\.(png|jpe?g|gif|svg)$/i,
				use: ['file-loader'],
			},
		],
	},
	plugins: [
		new HTMLWebpackPlugin({
			template: './src/index.html',
		}),
		new Dotenv(),
	],
}
