import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Server} from './server';
import {catchError, map, tap} from 'rxjs/operators';
import {throwError} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServerService {

  constructor(private httpClient: HttpClient) {
  }

  storeServers(servers: Server[]) {
    const headers = new HttpHeaders()
      .append('Content-Type', 'application/json');
    const params = new HttpParams()
      .append('auth', 'something');

    return this.httpClient.put('https://ng-http-test.firebaseio.com/data.json', servers, {
      headers,
      observe: 'body',
      responseType: 'json',
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
      );
  }

  getAppName() {
    return this.httpClient.get('https://ng-http-test.firebaseio.com/appName.json')
      .pipe(
        tap(res => console.log(res))
      )
      ;
  }
}
