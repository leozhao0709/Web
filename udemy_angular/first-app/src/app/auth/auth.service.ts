import {EventEmitter, Injectable} from '@angular/core';
import * as firebase from 'firebase';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private token: string;
  authStatusChanged = new EventEmitter<boolean>();

  constructor(private router: Router) {
  }

  signUp(email: string, password: string) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(() => this.router.navigate(['/']))
      .catch(err => console.log(err))
    ;
  }

  signIn(email: string, password: string) {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(res => console.log(res))
      .then(() => firebase.auth().currentUser.getIdToken())
      .then(token => this.token = token)
      .then(() => this.authStatusChanged.emit(true))
      .then(() => this.router.navigate(['/']))
      .catch(err => console.log(err));
  }

  signOut() {
    firebase.auth().signOut();
    this.token = undefined;
    this.authStatusChanged.emit(false);
    this.router.navigate(['/']);
  }

  getToken() {
    firebase.auth().currentUser.getIdToken()
      .then(token => this.token = token)
      .then(() => this.authStatusChanged.emit(true));
    return this.token;
  }

  isAuthenticated() {
    return this.token !== undefined;
  }

}
