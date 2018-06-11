import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { users } from 'src/app/mockData/mockUsers';
import { User } from 'src/app/interfaces/user';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiUrl: string = 'http://localhost:4000';
  user: BehaviorSubject<any>;

  constructor(
    private http: HttpClient
  ) {
    this.user = new BehaviorSubject<any>({});
  }

  loggedInUser(): Observable<any> {
    return this.user;
  }

  getUsers(): Observable<any> {
    return this.http.get(`${this.apiUrl}/users`);
  }

  loginUser(username, password): void {
    this.http.get(`${this.apiUrl}/user/${username}/${password}`).subscribe(value => this.user.next(value));
  }
}
