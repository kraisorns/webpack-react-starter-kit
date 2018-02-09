/*
Webpack config
*/

const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: './app/index.js',
  output: {
    libraryTarget: 'var',
    library: 'HelloApp',
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
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
    })
  ]
}