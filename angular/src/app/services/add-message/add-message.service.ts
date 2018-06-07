import { Injectable } from '@angular/core';

import { mockMessages } from 'src/app/mockData/mockMessages';
import { UserService } from 'src/app/services/user/user.service';

@Injectable({
  providedIn: 'root'
})
export class AddMessageService {
  userId: number;

  constructor(
    private _UserService: UserService
  ) {
    this.userId = this._UserService.loggedInUserId();
  }

  sendMessage(message, messageId): void {
    mockMessages.forEach(groupChat => {
      if (groupChat.id === messageId) {
        groupChat.messages.push(
          {
            image: '../../assets/1.jpg',
            user: this.userId,
            time: Date.now(),
            message: message
          }
        );
      }
    });

  }
}
