import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { UserService } from 'src/app/services/user/user.service';

import { mockMessages } from 'src/app/mockData/mockMessages';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GroupChatService {
  apiUrl: string = 'http://localhost:4000';

  private changeChatId: BehaviorSubject<number>;
  private groupChats: BehaviorSubject<any>;
  private searchResult: BehaviorSubject<any>;

  constructor(
    private http: HttpClient,
    private _UserService: UserService
  ) {
    this.changeChatId = new BehaviorSubject<number>(1);
    this.groupChats = new BehaviorSubject<any>([]);
    this.searchResult = new BehaviorSubject<any>(this.groupChats.value);
    this._UserService.loggedInUser().subscribe(value => {
      if (value.length) {
        this.getGroupChatsAll(value[0].username);
      }
    });
  }

  getGroupChatsAll(username): void {
    this.http.get(`${this.apiUrl}/messages/${username}`).subscribe(value => this.groupChats.next(value));
  }

  searchGroupChats(query): void {
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

  changeChat(id): void {
    this.changeChatId.next(id);
  }

  getChatId(): Observable<number> {
    return this.changeChatId;
  }

  removeGroupchat(): void {
    
  }
}
