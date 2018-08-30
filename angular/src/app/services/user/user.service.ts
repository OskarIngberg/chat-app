import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiUrl: string = 'http://localhost:4000';
  user: BehaviorSubject<any>;
  users: BehaviorSubject<any>;
  searchResult: BehaviorSubject<any>;

  constructor(
    private http: HttpClient
  ) {
    this.user = new BehaviorSubject<any>({});
    this.users = new BehaviorSubject<any>([]);
    this.getUsers();
    this.searchResult = new BehaviorSubject<any>({});
  }

  loggedInUser(): Observable<any> {
    return this.user;
  }

  searchUsers(query): void {
    let users = this.users.value;
    let result = [];

    if (query.length > 0) {
      users.forEach(user => {
        let displayname = user.displayname.toLowerCase();

        if (displayname.includes(query.toLowerCase())) {
          result.push(user);
        }
      });
    } else {
      result = users;
    }

    this.searchResult.next(result);
  }

  returnUsers(): Observable<any> {
    return this.users;
  }

  getUsers(): void {
    this.http.get(`${this.apiUrl}/users`).subscribe(value => this.users.next(value));
  }

  getUser(id): Observable<any> {
    return this.http.get(`${this.apiUrl}/user/${id}`);
  }

  loginUser(username, password): void {
    this.http.get(`${this.apiUrl}/user/${username}/${password}`).subscribe(value => this.user.next(value));
  }
}
