# svg-inline-loader

## 0. install

`npm install --save-dev svg-inline-loader`, `npm install --save svg-inline-react`

## 1. inject svg to webpack

```js
{
    test: /\.svg$/,
    loader: 'svg-inline-loader'
}
```

Then you can inject it to react

```jsx
import React, { Component } from 'react';
import logo from './logo.svg';

class Header extends Component {
    render() {
        return (
            <div className="header">
                <span dangerouslySetInnerHTML={{ __html: logo }} />
            </div>
        );
    }
}

export default Header;
```

## 2. using in react

```tsx
import InlineSVG from 'svg-inline-react';

<InlineSVG src={addCircleSvg} className={styles.svg} />;
```
