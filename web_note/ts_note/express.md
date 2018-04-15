# Express

## 1. working with react

In local, we always just run react and express in 2 different localhost ports and using proxy defined in package.json to communicate. 

For production, we can build the react folder and then use express to serve with it. Here's an example how to use it in production.

```ts
import * as express from 'express';
import { environment } from './environment/environment';
// import { usersApi } from './api/usersApi';
import { googleOauth } from './oauth/google';
import { paymentApi } from './api/paymentApi';

const port = environment.PORT;

export const app = express();

// oauth
app.use('/auth/google', googleOauth);

// api
app.use('/payment', paymentApi);

// app.use('/users', usersApi);

// most important connect part
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(__dirname + '/public'));

    app.get('*', (_, res) => {
        res.sendFile(__dirname + '/public/index.html');
    });
}

app.listen(port, () => {
    // tslint:disable-next-line:no-console
    console.log(`Server is up on ${port}`);
});
```

Note: serve the static folder in the bottom and use `app.get('*', (_, res) => {}` to serve all the unrouterd router to react to serve.

## 2. tricky part

- react-router with express-router

If you are create a react project using Create-react-app, then

if we are using this 2 router at the same time, then please remove `registerServiceWorker()` in `index.tsx`.