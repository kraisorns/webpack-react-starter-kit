/*
Webpack config
*/

const path = require('path')
const webpack = require('webpack')
const htmlWebpackPlugin = require('html-webpack-plugin')
const htmlWebpackPluginConfig = new htmlWebpackPlugin({
  template: './app/index.html',
  filename: 'index.html',
  inject: 'body'
})

module.exports = {
  entry: './app/index.js',
  output: {
    path: path.resolve('dist'),
    filename: 'hello-app-min.js'
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: '/node-modules/' },
      { test: /\.jsx$/, loader: 'babel-loader', exclude: '/node-modules/' },
      { test: /\.css$/, loader: 'style-loader!css-loader', exclude: '/node-modules/' }
    ]
  },
  plugins: [
    htmlWebpackPluginConfig,
  ]
}