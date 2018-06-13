import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

import { GroupChatService } from 'src/app/services/group-chat/group-chat.service';
import { ChatService } from 'src/app/services/chat-service/chat-service.service';
import { UserService } from 'src/app/services/user/user.service';

import { Message } from 'src/app/interfaces/message';
import { User } from 'src/app/interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private apiUrl: string = 'http://localhost:4000';
  private chat: BehaviorSubject<Message>;
  private user;

  constructor(
    private _GroupChatsService: GroupChatService,
    private _ChatService: ChatService,
    private _UserService: UserService,
    private http: HttpClient
  ) {
    this.chat = new BehaviorSubject<any>({});
    this._GroupChatsService.getChatId().subscribe(value => {
      this.getActiveChat(value);
    });
    this._UserService.loggedInUser().subscribe(value => this.user = value);
  }

  getActiveChat(id) {
    this._GroupChatsService.getGroupChats().subscribe(value => {
      value.forEach(chat => {
        if (chat._id === id) {
          this.chat.next(chat);
        }
      });
    });
  }

  getChat(): Observable<Message> {
    return this.chat;
  }

  sendMessage(message: string) {
    let chat = this.chat.value;
    let messageObj = {
      user: this.user[0]._id,
      time: Date.now(),
      message
    }

    chat.messages.push(messageObj);

    this.http.put(`${this.apiUrl}/messages/${chat._id}`, chat).subscribe(
      value => console.log(value)
    );
    this._ChatService.sendMessage(chat._id, this.user[0]._id);
  }
}
