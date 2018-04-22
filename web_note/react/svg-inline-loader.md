# svg-inline-loader

## 0. install

`npm install --save-dev svg-inline-loader`, `npm install --save svg-inline-react`

## 1. inject to webpack

```js
{
    test: /\.svg$/,
    loader: 'svg-inline-loader'
}
```

## 2. using in react

```tsx
import InlineSVG from 'svg-inline-react';

<InlineSVG src={addCircleSvg} className={styles.svg} />
```