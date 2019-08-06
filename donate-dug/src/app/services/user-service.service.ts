import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private usersUrl: string;
  private authUrl: string;
  private httpOptions: object;

  constructor(private http: HttpClient) {
    this.usersUrl = 'http://localhost:8080/user';
    this.authUrl = 'http://localhost:8080/auth';
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Credentials': 'true',
      })
    };
  }

  public findAll(): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl, this.httpOptions);
  }

  public findOne(user: User) {
    return this.http.get<User>(this.usersUrl, this.httpOptions);
  }

  public save(user: User) {
    return this.http.post<User>(`${this.authUrl}/register`, user, this.httpOptions);
  }
}
