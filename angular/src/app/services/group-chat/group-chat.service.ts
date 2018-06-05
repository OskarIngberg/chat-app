import { Injectable } from '@angular/core';

import { UserService } from 'src/app/services/user/user.service';

import { mockMessages } from 'src/app/mockData/mockMessages';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GroupChatService {

  private changeChatId: BehaviorSubject<number>;
  private groupChats: BehaviorSubject<any>;
  private searchResult: BehaviorSubject<any>;

  constructor(
    private _UserService: UserService
  ) {
    this.changeChatId = new BehaviorSubject<number>(1);
    this.groupChats = new BehaviorSubject<any>([]);
    this.getGroupChatsAll();
    this.searchResult = new BehaviorSubject<any>(this.groupChats.value);
  }

  getGroupChatsAll() {
    const loggedInUser = this._UserService.loggedInUser();
    let groupChats = [];

    mockMessages.forEach(chat => {
      chat.users.forEach(user => {
        if (loggedInUser.id === user) {
          groupChats.push(chat);
        }
      });
    });

    this.groupChats.next(groupChats);
  }

  searchGroupChats(query) {
    let groupChats = this.groupChats.value;
    let result = [];

    if (query.length > 0) {
      groupChats.forEach(message => {
        let messageTitle = message.title.toLowerCase();

        if (messageTitle.includes(query.toLowerCase())) {
          result.push(message);
        }
      });
    } else {
      result = groupChats;
    }

    this.searchResult.next(result);
  }

  getGroupChats(): Observable<any> {
    return this.groupChats;
  }

  getSearchresult(): Observable<any> {
    return this.searchResult;
  }

  changeChat(id) {
    this.changeChatId.next(id);
  }

  getChatId(): Observable<number> {
    return this.changeChatId;
  }

  removeGroupchat() {
    
  }
}
