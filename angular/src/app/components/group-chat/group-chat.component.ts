import { Component, OnInit, Input } from '@angular/core';

import { GroupChatService } from 'src/app/services/group-chat/group-chat.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'group-chat',
  templateUrl: './group-chat.component.html',
  styleUrls: ['./group-chat.component.scss']
})
export class GroupChatComponent implements OnInit {
  @Input() data;
  lastMessage: string = '';
  lastMessageSentTime: number;
  lastMessageUser: string = 'You';
  logedinUser;
  trimLength: number = 20;
  active: boolean = false;

  constructor(
    private _GroupChatService: GroupChatService,
    private _UserService: UserService
  ) {}

  ngOnInit() {
    this.lastMessage = this.getLastMessage();
    this.lastMessageSentTime = this.getLastMessageSentTime();
    this.getlastMessageUser();
    this._GroupChatService.getChatId().subscribe(value => {
      if (this.data._id === value) {
        this.active = true;
      } else {
        this.active = false;
      }
    })
  }

  changeGroupChat(id): void {
    this._GroupChatService.changeChat(id);
  }

  getLastMessage(): string {
    const messagesLength = this.data.messages.length - 1;
    const message = this.data.messages[messagesLength].message;

    if (message.length > this.trimLength) {
        const trimLastMessage = message.substring(0, this.trimLength) + '...';
        return trimLastMessage;
    }
    return message;
    
  }

  getLastMessageSentTime(): number {
    const messagesLength = this.data.messages.length - 1;

    return this.data.messages[messagesLength].time;
  }

  getlastMessageUser(): void {
    const messagesLength = this.data.messages.length - 1;
    let userId = this.data.messages[messagesLength].user;
    this._UserService.loggedInUser().subscribe(value => {
      if (value[0]._id !== userId) {
        this._UserService.getUser(userId).subscribe(value => { this.lastMessageUser = value[0].displayname; });
      }
    });
  }

}
