# Mongoose

## 0. install

`npm install --save mongoose validator`, `npm install --save-dev @types/mongoose @types/validator`

## 1. connect

```ts
const serverUrl = `mongodb://localhost:27017/`;
const dbName = 'TodoApp';

mongoose.connect(`${serverUrl}${dbName}`);
```

## 2. define schema

```ts
import mongoose from '../db/mongoose';
import * as validator from 'validator';
import * as jwt from 'jsonwebtoken';
import * as bcrypt from 'bcryptjs';
import { environment } from '../environment/environment';

export interface IUser extends mongoose.Document {
    _id: string;
    email: string;
    password: string;
    tokens: [{ _id: string, access: string, token: string }];
    generateAuthToken: () => Promise<string>;
}

export interface IUserModel extends mongoose.Model<IUser> {
    findByToken: (token: string) => Promise<any>;
}

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        trim: true,
        minlength: 1,
        unique: true,
        validate: {
            validator: validator.isEmail,
            message: '{Value} is not a valid email'
        }
    },
    password: {
        type: String,
        required: [true, 'password is required'],
        minlength: 6
    },
    tokens: [{
        access: {
            type: String,
            required: true
        },
        token: {
            type: String,
            required: true
        }
    }]
});

userSchema.pre('save', function (this: IUser, next: mongoose.HookNextFunction) {
    if (this.isModified('password')) {
        bcrypt.genSalt(10)
            .then(salt => {
                return bcrypt.hash(this.password, salt);
            })
            .then(hash => {
                this.password = hash;
                next();
            })
            .catch(err => {
                return Promise.reject(err);
            });
    } else {
        next();
    }
});

userSchema.methods.toJSON = function () {
    const { _id, email } = this;

    return { _id, email };
};

userSchema.methods.generateAuthToken = function () {
    const user = this;
    const access = 'auth';
    const token = jwt.sign({ _id: user._id, access }, environment.AUTH_SECRET);
    user.tokens = [...user.tokens, { access, token }];

    return this.save().then(() => {
        return token;
    }).catch(err => {
        return Promise.reject(err);
    });
};

userSchema.statics.findByToken = function (token: string) {
    let decode;
    try {
        decode = jwt.verify(token, environment.AUTH_SECRET);
    } catch (error) {
        return Promise.reject(error);
    }

    const { _id, access } = decode as any;

    return this.findOne({
        _id,
        'tokens.token': token,
        'tokens.access': access
    });
};

export const User = mongoose.model<IUser, IUserModel>('User', userSchema);
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