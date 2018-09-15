# Styles For Angular

## inject styles

-   `npm install` the style dependency, like bootstrap/materialcss
-   open `angularcli.json`, inject the dependency to `projects/targets/build/styles`. Make sure you are using the path with `node_modules/[path to dependency]`. For example: `./node_modules/bootstrap/dist/css/bootstrap.min.css`
-   restart ng server

## 2. ng-style and ng-class

```html
<p [ngStyle]="{'background-color': getColor()}" [ngClass]="{'online': serverStatus==='online'}">
  Server with ID {{ serverId }} is {{getServerStatus()}}
</p>
```

Note:

-   You need to pass in an js object for `ng-style` and `ng-class`. When the value is true, then the key style/class will be applied.
