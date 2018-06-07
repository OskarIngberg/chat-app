import { Injectable } from '@angular/core';

import { users } from 'src/app/mockData/mockUsers';
import { User } from 'src/app/interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  loggedInUser(): User {
    return users[0];
  }

  loggedInUserId(): number {
    const user = this.loggedInUser();
    return user.id;
  }

  getUsername(id): string {
    let username: string;

    users.forEach(user => {
      if (user.id === id) {
        username = user.username;
      }
    });

    return username;
  }
}
