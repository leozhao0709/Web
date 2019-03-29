import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PersonsService {
  persons: string[] = [];
  personsChanged = new EventEmitter<string[]>();

  constructor(private httpClient: HttpClient) {}

  fetchPersons() {
    this.httpClient
      .get<any>('https://jsonplaceholder.typicode.com/users')
      .pipe(map(res => res.map(user => user.username)))
      .subscribe(persons => {
        this.persons = persons;
        this.personsChanged.emit(this.persons);
      });
  }

  addPerson(name: string) {
    this.persons.push(name);
    this.personsChanged.emit(this.persons);
  }

  removePerson(name: string) {
    this.persons = this.persons.filter(person => person !== name);
    this.personsChanged.emit(this.persons);
  }
}
