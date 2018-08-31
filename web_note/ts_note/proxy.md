# [Proxy](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy)

## 1. usage

`Proxy` is used to detect an object change, then you can do something here.

```js
let data = new Proxy(
    { textInput: 12 },
    {
        set: (obj, prop, value) => {
            inputEl.value = value;
            obj[prop] = value;
        }
    }
);

data.textInput = 14; // inputEl value will also update to 14
```
