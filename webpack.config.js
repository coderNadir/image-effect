const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const wasmPackPlugin = require('@wasm-tool/wasm-pack-plugin');

module.exports = {
	entry: './public/main.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'index.js',
	},
	plugins: [
		new HTMLWebpackPlugin({
			template: './public/index.html',
		}),
		new wasmPackPlugin({
			crateDirectory: path.resolve(__dirname, '.'),
		}),
	],
	experiments: {
		asyncWebAssembly: true,
	},
};
