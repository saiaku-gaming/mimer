var path = require('path');
var webpack = require('webpack');
var debug = process.env.NODE_ENV !== 'production';

module.exports = {
  devtool: debug ? 'source-map' : false,
  devServer: {
    stats: 'errors-only',
    hot: true,
    host: 'localhost',
    inline: true
  },
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js'
  },
  entry: './index.tsx',
  resolve: {
    extensions: ['.ts', '.js', '.tsx']
  },
  module: {
    loaders: [
      { test: /\.tsx?$/, loader: ['ts-loader'] },
      { test: /\.json$/, loader: 'json' },
      { test: /\.scss$/, loader: ['style-loader', 'css-loader?modules&sourceMap&localIdentName=[local]__[hash:base64:5]', 'sass-loader?outputStyles=expanded&sourceMap'] }
    ]
  }
};
