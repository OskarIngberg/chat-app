import { Injectable } from '@angular/core';

import { users } from 'src/app/mockData/mockUsers';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  loggedInUser() {
    return users[0];
  }

  loggedInUserId() {
    const user = this.loggedInUser();
    return user.id;
  }

  getUsername(id) {
    let username: string;

    users.forEach(user => {
      if (user.id === id) {
        username = user.username;
      }
    });

    return username;
  }
}
