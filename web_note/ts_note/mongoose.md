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

## 4. find

```ts
import Todo from '../models/Todo';
import { ObjectID } from 'mongodb';

const id = '5ab32f40dafe069d398e065aaa';

// Note if want to check id is valid, please use this ObjectId.isValid
if (!ObjectID.isValid(id)) {
    console.log(`ID not valid`);
}

Todo.find({
    _id: id
}).then(todos => {
    console.log('Todos ', todos);
});

Todo.findOne({
    _id: id
}).then(todo => {
    console.log('Todo ', todo);
});

Todo.findById(id).then(todo => {
    console.log(todo);
}).catch(e => {
    console.log(e);
});

```

## 5. remove

```ts
// Todo.remove({}).then((result) => {
//   console.log(result);
// });

// Todo.findOneAndRemove
// Todo.findByIdAndRemove

// Todo.findOneAndRemove({_id: '57c4610dbb35fcbf6fda1154'}).then((todo) => {
//
// });

Todo.findByIdAndRemove('57c4610dbb35fcbf6fda1154').then((todo) => {
  console.log(todo);
});
```

## 6. update

```ts
Todo.findByIdAndUpdate(id, { $set: { text, completed, completedAt } }, { new: true })
        .then(todo => {
            res.send(todo);
        })
        .catch(err => {
            // tslint:disable-next-line:no-console
            console.log(err);
            res.status(404).send();
        });
```