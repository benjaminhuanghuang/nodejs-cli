const path = require('path');


module.exports = {
  entry: ['./es6test.js'],
  output: {
    path: path.resolve(__dirname, './'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  }
}