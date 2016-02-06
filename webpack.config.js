var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  devtool: 'eval',
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin('bundle.css')
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['react-hot', 'babel'],
      include: path.join(__dirname, 'src')
    },
    {
      test: /\.css$/,
      loaders: ['style-loader', 'css-loader', 'postcss-loader']
    },
    // {
    //   test: /\.(css)(\?.+)$/,
    //   loader: ExtractTextPlugin.extract('style-loader', 'css-loader', 'postcss-loader')
    // },
    {
      test: /\.(otf|eot|svg|ttf|woff|woff2)$/,
      loader: 'url?limit=8192'
    }
    ]
  },
  postcss: function () {
    return [require('postcss-cssnext'), require('autoprefixer')]
  }
};