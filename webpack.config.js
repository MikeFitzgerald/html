const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: './src/js/index.js',
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    port: 3000
  },
  module: {
    rules: [
      { test: /\.html$/, use:'raw-loader' }
    ]
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: './index.html',
      title: 'HTML - Webpack',
      xhtml: true
    }),
  ]
};
