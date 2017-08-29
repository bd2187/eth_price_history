var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'cheap-module-inline-source-map',
  entry: ['babel-polyfill', './src/app.js'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle_app.js'
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loaders: 'babel-loader' },
      { test: /\.css$/, loaders: 'style-loader!css-loader' }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html'
    })
  ]
};
