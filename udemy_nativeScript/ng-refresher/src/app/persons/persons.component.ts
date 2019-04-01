import { Component, OnInit, OnDestroy } from '@angular/core';
import { PersonsService } from './persons.service';
import { Observable } from 'rxjs';
import { StoreService } from '../store.service';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.scss']
})
export class PersonsComponent implements OnInit, OnDestroy {
  personsList: string[];
  personsSubject$: Observable<string[]>;

  constructor(private personsService: PersonsService, private storeService: StoreService) {}

  ngOnInit() {
    // this.personsService.personsChanged.subscribe(persons => {
    //   this.personsList = persons;
    // });
    console.log('person componen init...');
    this.personsSubject$ = this.storeService.personList$;
  }

  ngOnDestroy(): void {
    console.log('...destroyed...');
  }

  onRemovePerson(name: string) {
    this.personsService.removePerson(name);
  }
}
