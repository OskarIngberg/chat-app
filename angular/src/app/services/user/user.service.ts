import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { users } from 'src/app/mockData/mockUsers';
import { User } from 'src/app/interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiUrl: string = 'http://localhost:4000';

  constructor(
    private http: HttpClient
  ) { }

  loggedInUser(): User {
    return users[0];
  }

  loggedInUserId(): number {
    const user = this.loggedInUser();
    return user._id;
  }

  getUsername(id): string {
    let username: string;

    users.forEach(user => {
      if (user._id === id) {
        username = user.username;
      }
    });

    return username;
  }

  getUsers() {
    return this.http.get(`${this.apiUrl}/users`);
  }
}
