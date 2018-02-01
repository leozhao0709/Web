# Promise

## 1. basic

```ts
const sleep = (time: number, value: string) => {
    setTimeout(() => {
  return new Promise<string>((resolve, reject) => {
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

## 2. Promise all

Returns the result when **all** the promise done.

```ts
const promise1 = new Promise<string>((resolve, reject) => {
  setTimeout(() => {
    resolve('Resolved!!!');
  }, 1000);
});

const promise2 = new Promise<string>((resolve, reject) => {
  setTimeout(() => {
    // resolve('Resolved!!!');
    reject('Rejected!!!');
  }, 2000);
});

// this will return 'Rejected' or [ 'Resolved!!!', 'Resolved!!!' ]
Promise.all([promise1, promise2])
  .then((success) => {
    console.log(success);
  })
  .catch((error) => {
    console.log(error);
  })
  ;
```

## 3. Promise race

Returns the result when the **first** promise done.

```ts
const promise1 = new Promise<string>((resolve, reject) => {
  setTimeout(() => {
    resolve('Resolved!!!');
  }, 1000);
});

const promise2 = new Promise<string>((resolve, reject) => {
  setTimeout(() => {
    // resolve('Resolved!!!');
    reject('Rejected!!!');
  }, 2000);
});

// always return 'Resolved!!!'
Promise.race([promise1, promise2])
  .then((success) => {
    console.log(success);
  })
  .catch((error) => {
    console.log(error);
  })
  ;
```