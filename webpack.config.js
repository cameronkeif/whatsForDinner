/* eslint-disable */

var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var BUILD_DIR = path.resolve(__dirname, 'client/public/');
var APP_DIR = path.resolve(__dirname, 'client/app/');

var config = {
  entry: APP_DIR + '/index.jsx',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  devtool: 'source-map',
  module : {
    loaders : [
      {
        test : /\.jsx?/,
        include : APP_DIR,
        loader : 'babel'
      },
      {
          test: /\.less$/,
          loader: "style!css!less"
      }
    ]
  },
  resolve: {
    extensions: ["", ".js", ".jsx"]
  },
  plugins: [
        // extract inline css into separate 'styles.css'
        new ExtractTextPlugin('styles.css')
    ]
};

module.exports = config;