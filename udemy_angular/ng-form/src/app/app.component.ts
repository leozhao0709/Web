import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {debounceTime, distinctUntilChanged} from 'rxjs/operators';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

  @ViewChild('form') ngForm: NgForm;
  ngFormChangeSubscription: Subscription;

  defaultQuestion = 'pet';
  answer = '';
  genders = ['male', 'female'];

  userInfo = {
    'userData': {
      'username': '',
      'email': '',
    },
    'secret': '',
    'answer': '',
    'gender': ''
  };

  ngOnInit() {
    this.ngFormChangeSubscription = this.ngForm.valueChanges.pipe(
      debounceTime(1000),
      distinctUntilChanged()
    ).subscribe(console.log);
  }

  ngOnDestroy() {
    this.ngFormChangeSubscription.unsubscribe();
  }

  suggestUserName() {
    this.ngForm.form.patchValue({
      'userData': {
        'username': 'Anna'
      }
    });
  }

  onSubmit() {
    console.log(this.ngForm);
    this.userInfo.userData.username = this.ngForm.value.userData.username;
    this.userInfo.userData.email = this.ngForm.value.userData.email;
    this.userInfo.secret = this.ngForm.value.secret;
    this.userInfo.answer = this.ngForm.value.questionAnswer;
    this.userInfo.gender = this.ngForm.value.gender;
  }
}
