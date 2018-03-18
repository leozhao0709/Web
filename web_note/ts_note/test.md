# Test

## 1. Test npm library

Check `npm install --save-dev jest`

Then change the `package.json` and change the `npm test` cmd to `jest **/*.test.js`.

## 2. example

- sync code test

```ts
test('adds 1 + 2 to equal 3 in Typescript', () => {
    const sum = require('../sum.ts');
    expect(sum(1, 2)).toBe(3);
});
```

- async code test

```ts
test('the data is peanut butter', () => {
    expect.assertions(1);
    return expect(fetchData()).resolves.toBe('peanut butter');
});

test('the fetch fails with an error', () => {
    expect.assertions(1);
    return expect(fetchData()).rejects.toMatch('error');
});

// this is just another syntax surgar
test('the data is peanut butter', async () => {
    expect.assertions(1);
    await expect(fetchData()).resolves.toBe('peanut butter');
});

test('the fetch fails with an error', async () => {
    expect.assertions(1);
    await expect(fetchData()).rejects.toMatch('error');
});
```