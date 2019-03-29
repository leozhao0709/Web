import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { PersonsService } from '../persons.service';

@Component({
  selector: 'app-person-input',
  templateUrl: './person-input.component.html',
  styleUrls: ['./person-input.component.scss']
})
export class PersonInputComponent implements OnInit {
  createdPerson = null;

  constructor(private router: Router, private personsService: PersonsService) {}

  ngOnInit() {}

  onCreatePerson() {
    if (this.createdPerson) {
      this.personsService.addPerson(this.createdPerson);
      this.createdPerson = null;
      this.router.navigate(['']);
    }
  }
}
