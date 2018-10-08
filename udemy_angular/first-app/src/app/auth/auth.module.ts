import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Route, RouterModule} from '@angular/router';
import {SignUpComponent} from './sign-up/sign-up.component';
import {SignInComponent} from './sign-in/sign-in.component';
import {ReactiveFormsModule} from '@angular/forms';

const authRoutes: Route[] = [
  {path: 'signup', component: SignUpComponent},
  {path: 'signin', component: SignInComponent},
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(authRoutes)
  ],
  declarations: [
    SignUpComponent,
    SignInComponent
  ],
  exports: [
    RouterModule
  ]
})
export class AuthModule {
}
