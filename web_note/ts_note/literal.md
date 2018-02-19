# object literal

## 1. basic

If you are define an object and the object has same literal word keys and value, then we can just write one. Also for function, we can remove `function` keyword.

```js
const Car = {
  color,
  drive() {
    return 'Vroom!';
  },
  getColor() {
    return this.color;
  }
};
```