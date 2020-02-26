const { resolve }  = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  entry: {
    main : resolve('./src/index.tsx'),
  },
  module : {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'babel-loader',
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
        template: './public/index.html',
        filename: './index.html',
    }),
],
};
