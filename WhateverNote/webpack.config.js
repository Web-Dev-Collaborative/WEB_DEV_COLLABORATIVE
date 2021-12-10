const path = require('path');

module.exports = {
  context: __dirname,
  entry: './frontend/whatever_note.jsx',
  output: {
    path: path.resolve(__dirname, ''),
    filename: './app/assets/javascripts/bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx', '*']
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          query: {
            presets: ['@babel/env', '@babel/react']
          }
        },
      }
    ]
  },
  devtool: 'source-map',
};