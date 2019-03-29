import { Component, OnInit } from '@angular/core';
import { PersonsService } from './persons.service';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.scss']
})
export class PersonsComponent implements OnInit {
  personsList: string[];

  constructor(private personsService: PersonsService) {}

  ngOnInit() {
    this.personsService.fetchPersons();
    this.personsService.personsChanged.subscribe(persons => (this.personsList = persons));
  }

  onRemovePerson(name: string) {
    this.personsService.removePerson(name);
  }
}
