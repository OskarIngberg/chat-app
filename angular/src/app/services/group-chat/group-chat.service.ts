import { Injectable } from '@angular/core';

import { UserService } from '../user/user.service';

import { mockMessages } from '../../mockData/mockMessages';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GroupChatService {

  private changeChatId: BehaviorSubject<number>;

  constructor(
    private _UserService: UserService
  ) {
    this.changeChatId = new BehaviorSubject<number>(1);
  }

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

  changeChat(id) {
    this.changeChatId.next(id);
  }

  getChatId(): Observable<number> {
    return this.changeChatId;
  }
}
