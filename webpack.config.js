const webpack = require('webpack');
const path    = require('path');

const { main: entry } = require('./package.json');

const conf = {
  entry,
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  devtool: 'source-map',
  devServer: {
    hot: true,
    port: 3000,
    overlay: true
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: 'babel-loader'
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};

module.exports = conf;