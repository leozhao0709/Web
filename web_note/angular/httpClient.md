# HttpClient

## 0. import `HttpClientModule`

Before using `HttpClient`, please import `HttpClientModule` in your `app.module.ts`.

## 1. example

```ts
constructor(private httpClient: HttpClient) {
  }

storeServers(servers: Server[]) {
    const headers = new HttpHeaders()
        .append('Content-Type', 'application/json');
    const params = new HttpParams()
      .append('auth', 'something');

    return this.httpClient.post('https://ng-http-test.firebaseio.com/data.json', servers, {
        headers,
        params,
        observe: 'body',
        responseType: 'text',
    });
}

getServers() {
    return this.httpClient.get<Server[]>('https://ng-http-test.firebaseio.com/data.json')
        .pipe(
            map(servers => servers.map(server => {
                server.name = `FETCHING_${server.name}`;
                return server;
            })),
            catchError(err => throwError(`something error: `, err))
      );;
  }
```

```ts
onSaveServers() {
    this.serverService.storeServers(this.servers).subscribe(
      res => console.log(res),
      err => console.log(err)
    );
  }

  onGetServers() {
    this.serverService.getServers().subscribe(
      servers => this.servers = servers,
      err => console.log(err)
    );
  }
```

Note:

-   All `HttpClient` package is import from `@angular/common/http`.
-   You need inject `HttpClient` in your service before you use it.
-   `HttpClient` returns an `Oberservable`, you need to subscribe to use the result.
-   you can define options in `post/get/put` method. You can use `observe`, `responseType` or other options.
-   you can use rxjs operator like `map`, `filter` or `catchError` operator with `pipe()`
-   With `HttpClient`, you can define generic type when using `get` or other method like `his.httpClient.get<Server[]>(url)`
-   Sometimes you can use `async` pipe to get the http response in template.
