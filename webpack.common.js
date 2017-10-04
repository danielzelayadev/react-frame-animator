const path = require('path');

const conf = {
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'react-frame-animator.min.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: 'babel-loader'
      }
    ]
  }
};

module.exports = conf;