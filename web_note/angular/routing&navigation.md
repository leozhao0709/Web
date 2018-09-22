# Routing & Navigation

## 1. register Routes

```ts
const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    {
        path: 'users',
        component: UsersComponent,
        children: [{ path: ':id/:name', component: UserComponent }]
    },
    {
        path: 'servers',
        component: ServersComponent,
        children: [{ path: ':id', component: ServerComponent }, { path: ':id/edit', component: EditServerComponent }]
    },
    { path: '**', pathMatch: 'full', component: PageNotFoundComponent }
];
```

Note:

-   After you define the `Routes`, you **must register** it to App **Module** imports with `RouterModule.forRoot(appRoutes)`

## 2. routerLink & routerLinkActive

You can define the `href` with `routerLink` in template. You can also define the `active` css class with `routerLinkActive`.

```html
<ul class="nav nav-tabs">
    <li role="presentation" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}"><a routerLink="/" >Home</a></li>
    <li role="presentation" routerLinkActive="active"><a routerLink="/servers">Servers</a></li>
    <li role="presentation" routerLinkActive="active"><a [routerLink]="['/users']">Users</a></li>
</ul>

<div class="col-xs-12 col-sm-4">
    <div class="list-group">
      <a
        routerLink="/server/5/edit"
        [queryParams]="{allowedEdit: 1}"
        fragment="loading"
        class="list-group-item"
        *ngFor="let server of servers">
        {{ server.name }}
      </a>
    </div>
  </div>
```

Note:

-   `<a></a>` href can be used for multi-page jump. `routerLink` is only used for SPA jump.
-   You can use `[routerLinkActiveOptions]="{exact: true}"` to define some router link active options.
-   You can also use property binding `[routerLink]="['/users']"` when you want to pass an object or array.
-   You can use `[queryParams]` to pass query params.
-   You can use `fragment` to pass a fragment param.
-   You need to use `/` at first for your link which means it's a absolute path. If you don't use `/`, then it will be a relative path. This is different with Router in ts code.

## 3. Router in ts code

```ts
// current active route is /servers
constructor(private router: Router, private activeRoute: ActivatedRoute) { }

onReload() {
    // this.router.navigateByUrl('/servers'); // will continue route to '/servers', {NavigationExtra} won't work for this method
    this.router.navigate(['/servers'], {relativeTo: this.activeRoute}); // will route to '/servers/servers'
  }
```

Note:

-   You need inject `Router` in constructor.
-   Then you can use `this.router.navigateByUrl('/servers');` or `this.router.navigate(['/servers'], {});` to navigate to different routes. **It's an abosulte path**. Note **for `navigate`, the first parameter is an array.**
-   `navigate()` method has second parameter `NavigationExtras` which you can define some properties like `relativePath` or `fragment` or other things.
-   For `NavigationExtras`, there's a `queryParamsHandling` option. You can have it value with `preserve` or `merge` or default with `''` which removed the original queryParams.
-   You don't need to specify `/` to means it's an absolute path. If you want to use a relative path, please use `relativeTo` and inject `ActivatedRoute`. **Note relative path is only working for `navigate`, not `navigateByUrl`.**
-   **Hint: Always use `/` and believe it's default an abosulte path no matter it's Router code in ts or RouterLink in template.**

## 4. fetch route params, queryParams and fragment

```ts
constructor(private activatedRoute: ActivatedRoute) { }

ngOnInit() {
this.user = {
    id: this.activatedRoute.snapshot.params['id'],
    name: this.activatedRoute.snapshot.params['name']
};

this.activatedRoute.params.subscribe(
    (params: Params) => {
    this.user.id = params['id'];
    this.user.name = params['name'];
    }
);
}
```

Note:

-   Use `ActivatedRoute.snapshot.params` to get current params.
-   Use `ActivatedRoute.snapshot.queryParams` to get current queryparams.
-   Use `ActivatedRoute.snapshot.fragment` to get current fragment.
-   Use `ActivatedRoute.params.subscribe` to subscribe the params changed event.
-   Use `ActivatedRoute.queryParams.subscribe` to subscribe the queryParams changed event.
-   Use `ActivatedRoute.fragment.subscribe` to subscribe the fragment changed event.
