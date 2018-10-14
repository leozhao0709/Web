# process

## 1. process argv

```ts
const argv = process.argv;

// tslint:disable-next-line:no-console
console.log(process.argv);
```

Then when you run `ts-node process.ts a b c`, you will get `[ 'node','/Users/lzhao/Documents/my_git/node/node_api/src/ts/process.ts','a','b','c' ]`