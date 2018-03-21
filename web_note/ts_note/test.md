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
describe('Post /todos', () => {
    it('should create a new todo', () => {
        const text = 'Test todo text';

        return request
            .post('/todos')
            .send({ text })
            .expect(200)
            .then((res) => {
                expect(res.body.text).to.equal(text);
            })
            ;
    });

    it('should not create a todo with invalid data', () => {
        return request
            .post('/todos')
            .send({})
            .expect(404)
            ;
    });
})

// this is just another syntax surgar using async and await
describe('Post /todos', () => {
    it('should create a new todo', async () => {
        const text = 'Test todo text';
        const res = await request.post('/todos').send({ text }).expect(200);
        expect(res.body.text).eqls(text );
    });

    it('should not create a todo with invalid data', async () => {
        await request.post('/todos').send({}).expect(400);

        const todos = await Todo.find();
        expect(todos.length).eq(5);
    });
})
```