# This is for typescript async

## 1. Basic

```ts
const sleep = (time: number) => {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      resolve();
      // // 模拟出错了，返回 ‘error’
      // reject('error');
    }, time);
  });
};

export const start = async () => {
  try {
    console.log('start');
    await sleep(3000); // 这里得到了一个返回错误
    // 所以以下代码不会被执行了
    console.log('end');
  } catch (err) {
    console.log(err); // 这里捕捉到错误 `error`
  }
};

start();

```

Note:

- `async` must followed by a function and in the function, it must surrounded by a try/catch block.

- we need to use `await` for promise section.

- After `await` finish running, then left code can be running.
