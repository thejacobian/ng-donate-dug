import { Injectable } from '@angular/core';
import { UserService } from './user-service.service';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { User } from '../models/user';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private authUrl: string;
  private httpOptions: object;

  constructor(private http: HttpClient) {
    this.authUrl = 'http://localhost:8080/auth';
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    };
  }

  authenticate(user: User) {
    return this.http.post<User>(`${this.authUrl}/login`, user, this.httpOptions).pipe(
      map(
        userData => {
          sessionStorage.setItem('username', user.username);
          console.log(userData);
          return userData;
        }
      )
     );
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
