const path = require('path')

const baseConfig = require('./webpack.config.base')

module.exports = Object.assign({}, baseConfig, {
  devServer: {
    contentBase: path.join(__dirname, '../'),
    compress: false,
    port: 9090,
    watchContentBase: true,
    hot: true,
    historyApiFallback: true
  }
})
