# Mongodb

## 0. install

using `npm install --save mongodb` and `npm install --save-dev @types/mongodb` to install.

## 1. connect

```ts
import { MongoClient } from 'mongodb';

const url = 'mongodb://localhost:27017';
const dbName = 'TodoApp';

MongoClient.connect(url)
    .then((client) => {
        // tslint:disable-next-line:no-console
        console.log(`connect to MongoDb server`);
        client.close();
    })
    .catch((err) => {
        // tslint:disable-next-line:no-console
        console.log(err);
    });
```

## 2. insert

```ts
const db = client.db(dbName);

db.collection('Todos').insertOne({
    text: 'Something to do 2',
    completed: false
}).then(res => {
    // tslint:disable-next-line:no-console
    console.log(JSON.stringify(res.ops, undefined, 2));
}).catch(err => {
    // tslint:disable-next-line:no-console
    console.log(`unable to insert to do: ${err}`);
});
```

## 3. fetch data

```ts
const db = client.db(dbName);
// find all
db.collection('Todos').find().toArray()
    .then((docs) => {
        // tslint:disable-next-line:no-console
        console.log(JSON.stringify(docs, undefined, 2));
    }).catch(error => {
        // tslint:disable-next-line:no-console
        console.log(error);
    });

// find by filter
db.collection('Todos').find({
    completed: true,
}).toArray()
    .then((docs) => {
        // tslint:disable-next-line:no-console
        console.log(JSON.stringify(docs, undefined, 2));
    }).catch(error => {
        // tslint:disable-next-line:no-console
        console.log(error);
    });
```

## 4. count

```ts
const db = client.db(dbName);
db.collection('Todos').find({
        completed: false,
}).count()
    .then((docs) => {
        // tslint:disable-next-line:no-console
        console.log(JSON.stringify(docs, undefined, 2));
    }).catch(error => {
        // tslint:disable-next-line:no-console
        console.log(error);
    });
```

## 5. delete

```ts
const db = client.db(dbName);
//deleteMany
db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
    console.log(result);
});

// deleteOne
db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
    console.log(result);
});

// findOneAndDelete
db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
    console.log(result);
});
```

## 6. update

```ts
const db = client.db(dbName);
db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('57abbcf4fd13a094e481cf2c')
  }, {
    $set: {
      name: 'Andrew'
    },
    $inc: {
      age: 1
    }
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  });
```
