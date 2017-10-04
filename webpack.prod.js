const merge  = require('webpack-merge');
const common = require('./webpack.common');
const path   = require('path');

const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const config = merge(common, {
  entry: path.resolve(__dirname, 'src/index.js'),
  plugins: [
    new UglifyJSPlugin()
  ]
});

module.exports = config;