import { Injectable } from '@angular/core';

import { UserService } from '../user/user.service';

import { mockMessages } from '../../mockData/mockMessages';

@Injectable({
  providedIn: 'root'
})
export class GroupChatService {

  constructor(
    private _UserService: UserService
  ) { }

  getGroupChats() {
    const loggedInUser = this._UserService.loggedInUser();
    let groupChats = [];

    mockMessages.forEach(chat => {
      chat.users.forEach(user => {
        if (loggedInUser.id === user) {
          groupChats.push(chat);
        }
      });
    });

    return groupChats;
  }
}
