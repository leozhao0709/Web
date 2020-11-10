const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common');

module.exports = merge(commonConfig, {
  mode: 'development',
  devtool: 'inline-source-map',
  output: {
    filename: '[name].[contentHash:8].js',
    libraryTarget: 'umd',
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000,
    // // 设置代理
    // proxy: {
    //   // 将本地 /api/xxx 代理到 localhost:3000/api/xxx
    //   '/api': 'http://localhost:3000',

    //   // 将本地 /api2/xxx 代理到 localhost:3000/xxx
    //   '/api2': {
    //     target: 'http://localhost:3000',
    //     pathRewrite: {
    //       '/api2': '',
    //     },
    //   },
    // },
  },
  module: {
    rules: [
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[name]__[local]___[hash:base64:5]',
              },
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [['postcss-preset-env']],
              },
              sourceMap: true,
            },
          },
          {
            loader: 'sass-loader',
            options: { sourceMap: true },
          },
        ],
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/i,
        use: [
          {
            loader: 'url-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    // new CopyPlugin({ patterns: [{ from: '', to: '' }] }),
    new HtmlWebpackPlugin({ template: 'src/index.html' }),
  ],
});
