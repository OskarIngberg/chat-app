import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BehaviorSubject, Observable } from 'rxjs';

import { UserService } from 'src/app/services/user/user.service';

@Injectable({
  providedIn: 'root'
})
export class GroupChatService {
  apiUrl: string = 'http://localhost:4000';

  private changeChatId: BehaviorSubject<string>;
  private groupChats: BehaviorSubject<any>;
  private searchResult: BehaviorSubject<any>;

  constructor(
    private http: HttpClient,
    private _UserService: UserService
  ) {
    this.changeChatId = new BehaviorSubject<string>('');
    this.groupChats = new BehaviorSubject<any>([]);
    this.searchResult = new BehaviorSubject<any>(this.groupChats.value);
    this._UserService.loggedInUser().subscribe(value => {
      if (value.length) {
        this.getGroupChatsAll(value[0]._id);
      }
    });
  }

  getGroupChatsAll(id): void {
    this.http.get(`${this.apiUrl}/messages/${id}`).subscribe(value => {
      this.groupChats.next(value);
      this.searchResult.next(value);
      this.changeChatId.next(value[0]._id);
    });
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

  getChatId(): Observable<string> {
    return this.changeChatId;
  }

  removeGroupchat(): void {
    
  }
}
