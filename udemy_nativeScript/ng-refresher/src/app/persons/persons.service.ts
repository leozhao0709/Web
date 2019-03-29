import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PersonsService {
  persons: string[] = ['max', 'stephine', 'Anna'];
  personsChanged = new EventEmitter<string[]>();

  constructor() {}

  addPerson(name: string) {
    this.persons.push(name);
    this.personsChanged.emit(this.persons);
  }

  removePerson(name: string) {
    this.persons = this.persons.filter(person => person !== name);
    this.personsChanged.emit(this.persons);
  }
}
