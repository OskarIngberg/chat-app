import { Injectable } from '@angular/core';

import { users } from '../../mockData/mockUsers';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  loggedInUser() {

    return users[0];
  }
}
