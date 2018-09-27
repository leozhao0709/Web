import {Component, OnInit} from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  genders = ['male', 'female'];

  signupForm: FormGroup;
  hobbies = new FormArray([]);

  forbiddenUserNames = ['Anna'];

  ngOnInit() {
    this.signupForm = new FormGroup({
      'userData': new FormGroup({
        'username': new FormControl('Lei', [Validators.required, this.forbiddenNames.bind(this)]),
        'email': new FormControl('', [Validators.required, Validators.email], this.forbiddenEmails),
      }),
      'gender': new FormControl('male'),
      'hobbies': this.hobbies,
    });

    // this.signupForm.valueChanges.subscribe((value) => {
    //   console.log(value);
    // });

    // this.signupForm.statusChanges.subscribe((status) => {
    //   console.log(status);
    // });
  }

  onSubmit() {
    console.log(this.signupForm);
    this.signupForm.reset({
      'gender': 'male'
    });
  }

  suggestName() {
    this.signupForm.patchValue({
      'userData': {
        'username': 'hahaha'
      }
    });
  }

  onAddHobby() {
    const newHobby = new FormControl('', Validators.required);
    this.hobbies.push(newHobby);
  }

  forbiddenNames(control: FormControl): { [s: string]: boolean } {
    if (this.forbiddenUserNames.indexOf(control.value) !== -1) {
      return {'nameIsForbidden': true};
    }
    // If no error, return null!!!
    return null;
  }

  forbiddenEmails(controls: FormControl): Promise<{ [s: string]: boolean }> | Observable<{ [s: string]: boolean }> {
    return new Promise<{ [s: string]: boolean }>((res, rej) => {
      setTimeout(() => {
        if (controls.value === 'test@test.com') {
          return res({'emailIsForbidden': true});
        } else {
          return res(null);
        }
      }, 1500);
    });
  }


}
