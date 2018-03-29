# PassportJS

## 0. install

- google: `npm install --save passport passport-google-oauth2` and `npm install --save-dev "@types/passport" @types/passport-google-oauth2`

## 1. google oauth

- set up google console at  [google console](https://console.developers.google.com/projectselector/apis/library?supportedpurview=project), please be sure select `Google+ Api`, then we can access oauth 2 api.

- setup code:

```ts
import * as passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth2';
import { environment } from '../environment/environment';
import { Router } from 'express';

export const googleOauth = Router();

passport.use(new GoogleStrategy(
    // step 2
    {
    clientID: process.env.GOOGLE_CLIENT_ID || environment.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET || environment.GOOGLE_CLIENT_SECRET,
    callbackURL: '/auth/google/callback',
}, 
 // step 4
(accessToken, refreshToken, profile, done) => {
    // tslint:disable-next-line:no-console
    console.log('access token', accessToken);
    // tslint:disable-next-line:no-console
    console.log('refresh token', refreshToken);
    // tslint:disable-next-line:no-console
    console.log('profile', profile);
}
));

// step 1 get /auth/google
googleOauth.get('/', passport.authenticate('google', {
    scope: ['profile', 'email']
}));

// step 3 get /auth/google/callback
googleOauth.get('/callback', passport.authenticate('google'));
```