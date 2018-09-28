# [Angular reactive form](https://angular.io/guide/reactive-forms)

## 0. inject form module

-   Open `src/app/app.module.ts`
-   `import { ReactiveFormsModule } from '@angular/forms';`
-   append `ReactiveFormsModule` to `ngModule imports`.

## 1. example

```html
<div class="container">
  <div class="row">
    <div class="col-xs-12 col-sm-10 col-md-8 col-sm-offset-1 col-md-offset-2">
      <form [formGroup]="signupForm" (submit)="onSubmit()">

        <div [formGroupName]="'userData'">

          <div class="form-group">
            <label for="username">Username</label>
            <input
              type="text"
              id="username"
              [formControlName]="'username'"
              class="form-control">
            <p *ngIf="!signupForm.get('userData.username').valid && signupForm.get('userData.username').touched"
               class="help-block">Please
              enter a valid username</p>
          </div>
          <button class="btn btn-primary" type="button" (click)="suggestName()">Suggest a name</button>

          <div class="form-group">
            <label for="email">email</label>
            <input
              type="text"
              id="email"
              [formControlName]="'email'"
              class="form-control">
            <p *ngIf="!signupForm.get('userData.email').valid && signupForm.get('userData.email').touched"
               class="help-block">Please enter a
              valid email</p>
          </div>
        </div>

        <div class="radio" *ngFor="let gender of genders">
          <label>
            <input
              type="radio"
              [formControlName]="'gender'"
              [value]="gender">{{ gender }}
          </label>
        </div>

        <div formArrayName="hobbies">
          <h4>Your hobbies</h4>
          <button class="btn btn-default" type="button" (click)="onAddHobby()">Add hobby</button>
          <div class="form-group" *ngFor="let hobbyControl of hobbies.controls; let i = index">
            <input type="text" class="form-control" [formControlName]="i">
          </div>
        </div>
        <button [disabled]="!signupForm.valid" class="btn btn-primary" type="submit">Submit</button>
      </form>
    </div>
  </div>
</div>
```

```ts
import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

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
            userData: new FormGroup({
                username: new FormControl('Lei', [Validators.required, this.forbiddenNames.bind(this)]),
                email: new FormControl('', [Validators.required, Validators.email], this.forbiddenEmails)
            }),
            gender: new FormControl('male'),
            hobbies: this.hobbies
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
            gender: 'male'
        });
    }

    suggestName() {
        this.signupForm.patchValue({
            userData: {
                username: 'hahaha'
            }
        });
    }

    onAddHobby() {
        const newHobby = new FormControl('', Validators.required);
        this.hobbies.push(newHobby);
    }

    forbiddenNames(control: FormControl): { [s: string]: boolean } {
        if (this.forbiddenUserNames.indexOf(control.value) !== -1) {
            return { nameIsForbidden: true };
        }
        // If no error, return null!!!
        return null;
    }

    forbiddenEmails(controls: FormControl): Promise<{ [s: string]: boolean }> | Observable<{ [s: string]: boolean }> {
        return new Promise<{ [s: string]: boolean }>((res, rej) => {
            setTimeout(() => {
                if (controls.value === 'test@test.com') {
                    return res({ emailIsForbidden: true });
                } else {
                    return res(null);
                }
            }, 1500);
        });
    }
}
```

Note:

-   Use `[formGroup]` to bind in `<form>` element.
-   In your form template, if you want to bind to your inner `FormGroup`, then use `[formGroupName]="'group-key'"`.
-   For you input in template, use `[formControlName]="'control-key'"` to bind.
-   You can use `signupForm.get(key)` to get your form control element in both template and ts file. Then you can use `valid` or `touched` to get the status of control
-   Use `[formArrayName]` to bind `FormArray`.
-   In your ts code, you can use `this.signupForm.reset, this.signupForm.patch` to update your form value.
-   You can use `this.signupForm.valueChanges.subscribe` to subscribe the form value change observable.
-   You can use `this.signupForm.stateChanges.subscribe` to subscribe the form state change observable.
-   You can also create your own sync/async validator. Checking above example.
-   When you use `<form>` element, all other ng related property within `<form>` will be something like `[***Name] = "'key'"`
-   You can also use `[formControl]="yourControl"`, but this is not within a `<form>` element. Always just bind with an `<input>`. And then you can use your `this.yourControl.valueChanges` observable.
-   If you don't bind template with your ts formGroup, then you will get `No provider for ControlContainer` error.
