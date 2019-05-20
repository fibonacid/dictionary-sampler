var path = require('path');
var webpack = require('webpack');
const Dotenv = require('dotenv-webpack');

module.exports = {
   entry: ['babel-polyfill', './index.js'],
   output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js'
   },
   mode: 'development',
   // https://github.com/axios/axios/issues/456#issuecomment-285287911
   target: 'node',
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
   plugins: [
      new Dotenv()
   ],
   node: {
      fs: 'empty' // https://github.com/webpack-contrib/css-loader/issues/447
   }
};