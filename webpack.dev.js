
const webpack = require('webpack');
const common  = require('./webpack.common');
const merge   = require('webpack-merge');
const path    = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const indexConfig = {
  template: path.resolve(__dirname, 'demo/index.html')
};

const config = merge(common, {
  entry: path.resolve(__dirname, 'demo/index.js'),
  devtool: 'inline-source-map',
  devServer: {
    hot: true,
    port: process.env.PORT || 3000,
    overlay: true,
    open: true,
    contentBase: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.(jpe?g|png|gif|svg|ttf)$/i,
        loaders: ['url-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin(indexConfig),
    new webpack.HotModuleReplacementPlugin()
  ]
});

module.exports = config;