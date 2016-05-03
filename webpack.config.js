var HtmlWebpackPlugin = require('html-webpack-plugin')
var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/app/index.html',
  filename: 'index.html',
  inject: 'body'
})

module.exports = {
  entry: [
   // 'webpack-dev-server/client?http://0.0.0.0:3000', //WebpackDevServer host and port
   // 'webpack/hot/only-dev-server', //"only" prevents reload on syntax errors
    'babel-polyfill',
    './app/index.js'
  ],
  output: {
    path: __dirname + '/dist',
    filename: "index_bundle.js"
  },
  module: {
    loaders: [
      { test: /\.js?$/, 
        exclude: /node_modules/, 
        loader: 'babel-loader'
      }
    ],
  },
  plugins: [
    HTMLWebpackPluginConfig
  ],
}
