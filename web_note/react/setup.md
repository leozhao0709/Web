# Setup typescript react project

## 1. Theory

1. `npm install -g create-react-app` if you are not install create-react-app in global
2. `create-react-app my-app --scripts-version=react-scripts-ts`
3. `cd my-app & npm start`

if we want to use scss, then use these command:

- `npm install --save-dev node-sass-chokidar`
- `npm install --save-dev npm-run-all`
- `npm install --save-dev typings-for-css-modules-loader`
- `npm install -g json` if you are not install json in global
- `json -I -f package.json -e 'this.scripts = {...this.scripts, ...{"build-css": "node-sass-chokidar src/ -o src/", "watch-css": "npm run build-css && node-sass-chokidar src/ -o src/ --watch --recursive", "start-ts": "react-scripts-ts start", "start": "npm-run-all -p watch-css start-ts", "build-ts": "react-scripts-ts build", "build": "npm-run-all build-css build-ts"}}`
- using `npm run eject` to open the config file

if we want to using css module, then open `webpack.config.dev.js` and search `cssloader`, comment all the `cssloader` and change it to `typings-for-css-modules-loader`:

```js
// {
//   loader: require.resolve('css-loader'),
//   options: {
//     importLoaders: 1,
//   },
// },
{
  loader: 'typings-for-css-modules-loader',
  options: {
    modules: true,
    namedExport: true,
    camelCase: true,
    minimize: true,
    localIdentName: "[name]__[local]__[hash:base64:5]"
  }
},
```

## 2. quick set up (only used by myself), using scss and css module

1. `myTypescriptPro new-react-app my-app`
2. open `webpack.config.dev.js` and search `cssloader`, comment all the `cssloader` and change it to `typings-for-css-modules-loader`

```js

// change the css-loader to typings-for-css-modules-loader
// {
//   loader: require.resolve('css-loader'),
//   options: {
//     importLoaders: 1,
//   },
// },
{
  loader: 'typings-for-css-modules-loader',
  options: {
    modules: true,
    namedExport: true,
    camelCase: true,
    minimize: true,
    localIdentName: "[name]__[local]__[hash:base64:5]"
  }
},
```
