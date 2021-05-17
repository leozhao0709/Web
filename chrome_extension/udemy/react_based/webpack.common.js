const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  target: 'web',
  entry: {
    index: './src/index.ts',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    alias: {
      app: path.resolve(__dirname, 'src'),
      tests: path.resolve(__dirname, 'tests'),
    },
    extensions: ['.tsx', '.ts', '.js', '.svg', '.png', 'jpg', 'gif'],
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /(node_modules|tests)/,
        use: 'babel-loader?cacheDirectory',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'index',
      filename: 'index.html',
      template: 'public/index.html',
      chunks: ['index'], // only enject index.js to template
    }),
    new HtmlWebpackPlugin({
      title: 'options',
      filename: 'options.html',
      template: 'public/options.html',
      chunks: ['options'], // only enject index.js to template
    }),
  ],
};
