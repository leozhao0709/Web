# export

## 1. export a library (index.ts instead of index.d.ts)

please note do not use `export default` in the file you want to export;

```ts
export * from './client/src/packages/Button/Button';
export * from './client/src/packages/Button/AddButton';
export * from './client/src/packages/TextEditor';
```
