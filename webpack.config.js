var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, './build');
var APP_DIR = path.resolve(__dirname, './js');
var STYLE_DIR = path.resolve(__dirname, './less');


var config = {
	context: __dirname + "/app",
	entry: {
		app: APP_DIR + "/main.js",
	},
	output: {
		path: BUILD_DIR,
		filename: "[name].js"
	},
	module: {
		loaders: [
		{
	      // "test" is commonly used to match the file extension
	      test: /\.js$/,
	      // "include" is commonly used to match the directories
	      include: APP_DIR,
	      // "exclude" should be used to exclude exceptions
	      // try to prefer "include" when possible

	      // the "loader"
	      loader: "babel-loader" // or "babel" because webpack adds the '-loader' automatically
	  },
	  ]
	},
}


module.exports = config;
