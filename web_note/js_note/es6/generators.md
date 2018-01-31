# Generators

## 1. Basic generators

```js
function* shopping() {
  const stuffFromStore = yield 'cash';
  const cleanClothes = yield 'laundry';

  return [stuffFromStore, cleanClothes];
}

let gen = shopping();
gen.next();
gen.next('groceries');
gen.next('clean clothes');
gen.next();

// give the following result
// {"value":"cash","done":false}
// {"value":"laundry","done":false}
// {"value":["groceries","clean clothes"],"done":true}
// {"done":true}
```

Note:

- The first time, the `gen.next()` is stopped at first yield, `yield 'cash'` and return this yield value.

- Then second time when we call `gen.next('groceries');`, we pass the parameter `'groceries'` to last time yield part and assgin this value to `const stuffFromStore`, it just like use this passed-in parameter to change the last yield part in function. And then go through the function, we meet the second `yield 'laundry'`, then we return the `'laundry'` value.

- The third time when we call `gen.next('clean clothes');`, it's same as the second time, we pass the `'clean clothes'` to the last yield part and assign this value to `const cleanClothes`, the function continue going through and meet the return value, then the function returns.

## 2. generator with for..of loop

Generator can works perfectly with for...of loop.

```js
function* colors() {
  yield 'Red';
  yield 'Yellow';
  yield 'Blue';
}

let myColors = [];
for (const color of colors()) {
  myColors.push(color);
}

//["Red","Yellow","Blue"]
console.log(myColors);
```