# Angular template Driven Form (suggest to use reactive form)

## 0. inject Form module

-   Open `src/app/app.module.ts`
-   `import { FormsModule } from '@angular/forms';`
-   append `FormsModule` to `ngModule imports`.

## 1. register your form in template

Give your form control element (`input`, `select` or whatever html form element) `ngModel` or `[ngModel]` or `[(ngModel)]` attribute. And **make sure your form elements had name attribute**.

Also give your form a name like `<form (submit)="onSubmit(form)" #form="ngForm">`. Note: `#form="ngForm"` **ngForm** is important here.

```html
<div class="container">
  <div class="row">
    <div class="col-xs-12 col-sm-10 col-md-8 col-sm-offset-1 col-md-offset-2">
      <form (submit)="onSubmit()" #form="ngForm">

        <div id="user-data" ngModelGroup="userData" #userData="ngModelGroup">
          <div class="form-group">
            <label for="username">Username</label>
            <input required type="text" id="username" class="form-control" name="username" [ngModel]>
          </div>
          <button class="btn btn-default" type="button" (click)="suggestUserName()">Suggest an Username</button>

          <div class="form-group">
            <label for="email">Mail</label>
            <input email required type="email" id="email" class="form-control" [ngModel] name="email"
            #email="ngModel">
            <p class="help-block" *ngIf="!email.valid && email.touched">Please enter a valid email!</p>
          </div>
        </div>
        <p class="help-block" *ngIf="userData.invalid && userData.touched">User data is invalid!</p>

        <div class="form-group">
          <label for="secret">Secret Questions</label>
          <select id="secret" class="form-control" [ngModel]="defaultQuestion" name="secret">
            <option value="pet">Your first Pet?</option>
            <option value="teacher">Your first teacher?</option>
          </select>
        </div>

        <div class="form-group">
          <textarea name="questionAnswer" rows="3" [(ngModel)]="answer" class="form-control" required></textarea>
        </div>
        <p>Your answer: {{answer}}</p>

        <div class="radio" *ngFor="let gender of genders">
          <label>
            <input
              type="radio"
              name="gender"
              ngModel
              [value]="gender"
              required
            >
            {{gender}}
          </label>
        </div>

        <button [disabled]="!form.valid" class="btn btn-primary" type="submit">Submit</button>
      </form>
      <hr>
      <div class="row" *ngIf="form.submitted">
        <div class="col-xs-12">
          <h3>Your Data</h3>
          <p>Username: {{userInfo.userData.username}}</p>
          <p>Email: {{userInfo.userData.email}}</p>
          <p>Secret question: {{userInfo.secret}}</p>
          <p>Secret answer: {{userInfo.answer}}</p>
          <p>Gender: {{userInfo.gender}}</p>
        </div>
      </div>
    </div>
  </div>
</div>
```

```ts
import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
    @ViewChild('form')
    ngForm: NgForm;
    ngFormChangeSubscription: Subscription;

    defaultQuestion = 'pet';
    answer = '';
    genders = ['male', 'female'];

    userInfo = {
        userData: {
            username: '',
            email: ''
        },
        secret: '',
        answer: '',
        gender: ''
    };

    ngOnInit() {
        this.ngFormChangeSubscription = this.ngForm.valueChanges
            .pipe(
                debounceTime(1000),
                distinctUntilChanged()
            )
            .subscribe(console.log);
    }

    ngOnDestroy() {
        this.ngFormChangeSubscription.unsubscribe();
    }

    suggestUserName() {
        this.ngForm.form.patchValue({
            userData: {
                username: 'Anna'
            }
        });
    }

    onSubmit() {
        this.userInfo.userData.username = this.ngForm.value.userData.username;
        this.userInfo.userData.email = this.ngForm.value.userData.email;
        this.userInfo.secret = this.ngForm.value.secret;
        this.userInfo.answer = this.ngForm.value.questionAnswer;
        this.userInfo.gender = this.ngForm.value.gender;
    }
}
```

Note:

-   **make sure your form elements had name attribute**
-   You can use `ngModelGroup` to group your form elements
-   You can use `this.ngForm.form.patchValue` to update the form. The key is the form element `name` attribute
