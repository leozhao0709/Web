import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  personList$ = new BehaviorSubject([]); // note it's behaviorSubject

  constructor(private httpClient: HttpClient) {}

  init() {
    // this.httpClient
    //   .get<any>('https://jsonplaceholder.typicode.com/users')
    //   .pipe(map(res => res.map(user => user.username)))
    //   .subscribe(persons => {
    //     this.personList$.next(persons);
    //     console.log('store next called....');
    //   });
    console.log('store next called...');
    this.personList$.next(['Lei', 'Lisa']);
  }
}
