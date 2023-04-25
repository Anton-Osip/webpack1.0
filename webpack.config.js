const path = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
	entry: { main: './src/index.js' },
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].[contenthash].js',
	},

	devServer: {
		port: 3000,
	},

	plugins: [
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, 'src/index.html'),
		}),
		new CleanWebpackPlugin(),
	],

	module: {
		rules: [
			{
				test: /\.m?js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env', '@babel/preset-react'],
					},
				},
			},
			{
				test: /\.css$/i,
				use: ['style-loader', 'css-loader'],
			},
			{
				test: /\.s[ac]ss$/i,
				use: ['style-loader', 'css-loader', 'sass-loader'],
			},
			{
				test: /\.(png|jpe?g|gif)$/i,
				use: [
					{
						loader: 'file-loader',
					},
				],
			},
		],
	},
}
