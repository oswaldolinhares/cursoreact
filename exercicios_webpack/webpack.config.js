const webpack = require('webpack')

module.exports = {
  entry: './ex2/index.js',
  output: {
    path: __dirname + '/public',
    filename: './bundle.js'
  },
  devServer: {
    port: 3000,
    contentBase: './public'
  },
  module: {
    loaders: [{
      test: /.js?$/,
      loader: 'babel-loader',
      excclude: /node_modules/,
      query: {
        presets: ['es2015'],
        plugins: ['transform-object-rest-spread']
      }
    }]
  }
}
