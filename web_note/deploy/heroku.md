# Heroku

## 0. heroku deploy process

1. Add a `start` command to package.json (node dist/app.js)
2. Listen on process.env.PORT (heroku using this environment by default)
3. Provision an app with heroku create (`heroku create`)
4. Deploy with git push heroku master (`git push heroku master`)

## 1. heroku config

using `heroku config` can see any config for your project. For example, we can get the heroku addons config from here. If we are using the mlab addon, then we can get the database url from here.

## 2. heroku domains

using `heroku domains` can show your heroku domain url.

## 3. heroku upload json file as env

using `heroku config:set FOO="$(< /my/file.json)"` to send a json file to FOO variable.