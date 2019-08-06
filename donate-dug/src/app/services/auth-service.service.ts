import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  authenticate(username, password) {
    if (username === 'jake' && password === 'jake') {
      sessionStorage.setItem('username', username);
      return true;
    } else {
      return false;
    }
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('username');
    //console.log(!(user === null));
    return !(user === null);
  }

  logout() {
    sessionStorage.removeItem('username');
  }
}
