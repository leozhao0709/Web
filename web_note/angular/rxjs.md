# Rxjs

## 1. simple subject example

```ts
searchInputSubject = new Subject();

ngOnInit(): void {
    this.searchInputSubject.pipe(
      debounceTime(500),
      distinctUntilChanged(),
    ).subscribe((filterString: string) => this.filterServers = this.servers.filter(
      (server) => server.name.toUpperCase().includes(filterString.toUpperCase())));
}

ngOnDestroy(): void {
    this.searchInputSubject.unsubscribe();
}
```
