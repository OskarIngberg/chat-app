import { Injectable } from '@angular/core';

import { mockMessages } from 'src/app/mockData/mockMessages';
import { UserService } from 'src/app/services/user/user.service';
import { ChatService } from 'src/app/services/chat-service/chat-service.service';

@Injectable({
  providedIn: 'root'
})
export class AddMessageService {
  userId: number;

  constructor(
    private _ChatService: ChatService,
    private _UserService: UserService
  ) {
    // this.userId = this._UserService.loggedInUser()._id;
  }

  sendMessage(message: string, messageId: number): void {
    mockMessages.forEach(groupChat => {
      if (groupChat._id === messageId) {
        groupChat.messages.push(
          {
            image: '../../assets/1.jpg',
            user: this.userId,
            time: Date.now(),
            message: message
          }
        );

        this._ChatService.sendMessage(message, messageId, this.userId);
      }
    });
  }
}
