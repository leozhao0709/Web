# Import and export

## 1. import default export

```ts
import * as express from 'express';
```

## 2. import normal export value;

```ts
import { config } from './config/config';
```

## 3. tricky

If you want to **export a value**, then it's better **not** use **default export**, especially when the value is changed during your script, please just use nomal export, do **not** use default export.

For **function or class**, you **can** use export default to export.
