# Spread

## 1. basic

Spread is a feature that we are using to combine array and array or array and other element.

We can also use to combine two objects.

We can also use this to create a **copy value** of object or array.

```js
array1 = [1,2,3];
array2 = [4,5,6];

// [ 0, 1, 2, 3, 4, 5, 6, 7 ]
[0, ...array1, ...array2, 7];
```

## 2. object spread

```js
const a = {
  name: '111',
  age: 22,
};

const b = {
  car: 'bbb',
  color: 'red'
};

// d: { name: '111', age: 22, car: 'bbb', color: 'red' }
const d = { ...a, ...b };

// c != a, but c had the same properties with a
const c = {
  ...a
}
```