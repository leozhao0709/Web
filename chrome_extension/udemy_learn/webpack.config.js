const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    index: './src/index.ts',
    background: './src/background.ts',
    content: './src/content.ts'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    umdNamedDefine: true
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000
  },
  mode: 'production',
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.svg', '.png', 'jpg', 'gif']
  },
  module: {
    rules: [
      {
        oneOf: [
          {
            test: /\.svg$/,
            use: [
              '@svgr/webpack',
              {
                loader: 'file-loader',
                options: {
                  esModule: false,
                  name: 'static/media/[name].[hash:8].[ext]'
                }
              }
            ]
          },
          {
            test: /\.scss$/,
            use: [
              'style-loader',
              {
                loader: 'css-loader',
                options: {
                  modules: {
                    localIdentName: '[name]__[local]___[hash:base64:5]'
                  }
                }
              },
              'sass-loader'
            ]
          },
          {
            test: /\.(ts|tsx)$/,
            loader: 'ts-loader',
            options: { configFile: 'tsconfig.build.json' }
          },
          {
            test: /\.(png|jpg|gif)$/i,
            use: [
              {
                loader: 'url-loader',
                options: {
                  limit: 8192
                }
              }
            ]
          }
        ]
      }
    ]
  },
  plugins: [new CopyPlugin(['manifest.json']), new HtmlWebpackPlugin({ template: 'src/index.html' })]
};
