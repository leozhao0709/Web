# Mongoose

## 0. install

`npm install --save mongoose`, `npm install --save-dev @types/mongoose`

## 1. connect

```ts
const serverUrl = `mongodb://localhost:27017/`;
const dbName = 'TodoApp';

mongoose.connect(`${serverUrl}${dbName}`);
```

## 2. define schema

```ts
import * as mongoose from 'mongoose';

const todoSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    completedAt: {
        type: Number,
        default: null
    }
});

const TodoModel = mongoose.model('Todo', todoSchema);

export default TodoModel;
```

## 3. save

```ts
const otherTodo = new TodoModel({
    text: 'otherTodo'
});

otherTodo.save()
    .then(res => {
        // tslint:disable-next-line:no-console
        console.log(res);
    })
    .catch(err => {
        // tslint:disable-next-line:no-console
        console.log(err);
    });
```