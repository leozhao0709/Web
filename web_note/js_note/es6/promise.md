# Promise

## 1. basic

```ts
const sleep = (time: number, value: string) => {
  return new Promise<string>(function (resolve, reject) {
    setTimeout(() => {
      resolve(value);
      // // 模拟出错了，返回 ‘error’
      // reject('error');
    }, time);
  });
};

const promise = sleep(3000, 'sleep')
  .then((value: string) => {
    console.log(`${value} end`);
    return 'value end';
  })
  .catch((err) => console.log(err))
  ;

promise.then((value: string | void) => {
  console.log(value);
});

```

Note:

- Promise has this chain feature. We can chain multiple levels as we want.

- Promise will return a promise value.

- We can also pass the value to next level just using `return` word.