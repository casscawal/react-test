var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, './build');
var APP_DIR = path.resolve(__dirname, './js');
var STYLE_DIR = path.resolve(__dirname, './less');


var config = {
	context: __dirname + "/app",
	entry: {
		app: APP_DIR + "/main.jsx",
	},
	output: {
		path: BUILD_DIR,
		filename: "[name].js"
	},
	 module: {
	    loaders: [
	      {
	        test: /\.jsx?$/,
	        loader: 'babel-loader',
	        exclude: /node_modules/,
	      }
	    ]
	  }
}


module.exports = config;
