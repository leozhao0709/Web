# Module

## 1. when you need `require`

1.  Make sure your `tsconfig.json` compilerOptions module is set to `commonjs`
2.  Then you can use `import package = require('3rd party library')`

## 2. extend that already defined type 

```ts (.d.ts)
declare namespace Express {
    interface Request {
        token?: string;
    }
}
```

Note:

-   **In typescript, if you define two same name interface, then the 2 interface will merge together by default**
-   Note in the above example, `Express` already defined in `@types/express`

## 3. you can also declare your own module

```ts
declare module 'express' {
    interface Request {
        token?: string;
    }

    export var aaa: number;
}
```

Note:

-   You need use quotes when you declare module.
-   when you want to use, you need `import { Request } from 'express';`