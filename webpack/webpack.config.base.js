const path = require('path')

module.exports = {
  entry: path.join(__dirname, '../src/index.jsx'),
  output: {
    path: path.join(__dirname, '../dist'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.jsx', '.js', '.scss', '.css'],
    plugins: []
  },
  module: {
    loaders: [
      {
        test: /\.jsx$/,
        loader: ['jsx-loader', 'babel-loader']
      }
    ]
  },
  devtool: 'source-map'
}
