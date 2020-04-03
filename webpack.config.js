const webpack = require("webpack");
const path = require('path');

module.exports = {
	entry: path.resolve(__dirname, 'src', 'index.js'),
	output: {
		path: path.resolve(__dirname, 'public'),
		filename: 'scripts.js',
	},
	devServer: {
		contentBase: path.resolve(__dirname, 'public'),
		historyApiFallback: true,
		port: 3000,
		open: true,
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
				},
			},
			{
				test: /\.css$/,
				use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
			},
		],
	},
	plugins: [
    new webpack.DefinePlugin({
			"process.env.SPOTIFY_CLIENT_ID": JSON.stringify("09f276ee3a464f4b9eb53304648f6426"),
			"process.env.SPOTIFY_DEV_REDIRECT_URI": JSON.stringify("http://localhost:3000/search")
    })
  ]
};
