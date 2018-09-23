import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn = false;

  constructor() {
  }

  isAuthenticated() {
    return new Promise((res, rej) => {
      setTimeout(() => {
        res(this.isLoggedIn);
      }, 800);
    });
  }

  signIn() {
    this.isLoggedIn = true;
  }

  signOut() {
    this.isLoggedIn = false;
  }

}
