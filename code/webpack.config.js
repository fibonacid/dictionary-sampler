var path = require('path');
var webpack = require('webpack');
module.exports = {
   entry: ['babel-polyfill', './index.js'],
   output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js'
   },
   module: {
      rules: [
         {
            test: /.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
               presets: ['es2015']
            }
         }
      ]
   },
   node: {
      fs: 'empty' // https://github.com/webpack-contrib/css-loader/issues/447
   }
};