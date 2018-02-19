# Rest

## 1. basic

Rest is an feature that when we want to pass **undetermined numbers parameters** to a function, then we can use this feature.

```js
function product(...numbers) {
  return numbers.reduce(function(acc, number) {
    return acc * number;
  }, 1);
}

product(1,2,3,4,5);
```