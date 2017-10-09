var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/js/index.js',
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    port: 3000
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
