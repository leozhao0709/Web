import {Component, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild('form') ngForm: NgForm;

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
