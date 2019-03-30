import { Component, OnInit } from '@angular/core';
import { PersonsService } from './persons.service';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.scss']
})
export class PersonsComponent implements OnInit {
  personsList: string[];
  isLoadingPersonList = false;

  constructor(private personsService: PersonsService) {}

  ngOnInit() {
    this.fetchPersonsList();
    this.personsService.personsChanged.subscribe(persons => {
      this.isLoadingPersonList = false;
      this.personsList = persons;
    });
  }

  fetchPersonsList() {
    this.isLoadingPersonList = true;
    this.personsService.fetchPersons().subscribe(
      persons => {
        console.log('...loading start...');
        this.personsList = persons;
      },
      null,
      () => console.log('...finish loading...')
    );
  }

  onRemovePerson(name: string) {
    this.personsService.removePerson(name);
  }
}
