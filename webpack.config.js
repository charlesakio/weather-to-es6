const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/app/index.html',
  filename: 'index.html',
  inject: 'body'
})

module.exports = {
  entry: [
    'webpack-dev-server/client?http://0.0.0.0:3000', //WebpackDevServer host and port
    'webpack/hot/only-dev-server', //"only" prevents reload on syntax errors
    'babel-polyfill',
    './app/index.js'
  ],
  output: {
    path: __dirname + '/dist',
    filename: "index_bundle.js"
  },
  module: {
    loaders: [
      { test: /\.jsx?$/, 
        exclude: /node_modules/, 
        loaders: ['react-hot', 'babel-loader'],
      },
      { test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
    ],
  },
  plugins: [
    HTMLWebpackPluginConfig,
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
}
