# Test

## 1. Test npm library

Check `npm install --save-dev ts-node mocha @types/mocha chai @types/chai `

Then change the `package.json` and change the `npm test` cmd to `mocha -r ts-node/register src/**/*.test.ts`.

## 2. example

- sync code test

```ts
describe('Test the Add', () => {
    it('should adds 1 + 2 to equal 3 in Typescript', () => {
        const sum = require('../sum.ts');
        expect(sum(1, 2)).equal(3);
    });
})
```

- async code test

```ts

// promise way remember return !
describe('Test the fetch data', () => {
    it('should that the data is peanut butter', () => {
        return fetchData
            .then((result) => {
                expect(result).equal('peanut butter')
            });
    });
})

describe('Test the fetch data error', () => {
    it('should fetch fails with an error', () => {
        return expect(fetchData()).rejects.toMatch('error');

        return fetchData
            .catch((err) => {
                expect(err).to.be.an('error');
            });
    });
})

// this is just another syntax surgar
describe('Test the fetch data', () => {
    it('should that the data is peanut butter', async () => {
        const result = await fetchData();
        expect(result).to.equal('peanut butter');
    });
})

describe('Test the fetch data error', () => {
    it('should fetch fails with an error', async () => {
        const error = await fetchData();
        expect(error).to.be.an('error');
    });
})
```