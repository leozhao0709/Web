# Console

## 1. clear console

`console.clear` can be used to clear teminal console.

```ts
new Promise(res => {
    setTimeout(() => {
        console.clear();
        // tslint:disable-next-line:no-console
        console.log('test hahahahahahaahah');
        res();
    }, 3000);
}).then(() => {
    setTimeout(() => {
        // tslint:disable-next-line:no-console
        console.log('test xixixixixxixi');
        console.clear();
    }, 3000);
});
```
