const path = require('path');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const packageJson = require('./package.json');

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
    new ModuleFederationPlugin({
      name: 'products',
      filename: 'remoteEntry.js',
      exposes: {
        './ProductsIndex': './src/bootstrap',
      },
      shared: packageJson.dependencies,
    }),
  ],
};
