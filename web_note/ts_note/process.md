# Process

## 1. process.argv

we can use this process.argv to get the user input from CL.
also check `npm install --save minimist`.

```ts
import * as minimist from 'minimist';

// tslint:disable-next-line:no-console
console.log(minimist(process.argv));
```