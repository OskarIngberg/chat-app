import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'group-chat',
  templateUrl: './group-chat.component.html',
  styleUrls: ['./group-chat.component.scss']
})
export class GroupChatComponent implements OnInit {
  @Input() data;
  lastMessage: string = '';
  lastMessageSentTime: number;
  trimLength: number = 40

  constructor() {}

  ngOnInit() {
    this.lastMessage = this.getLastMessage();
    this.lastMessageSentTime = this.getLastMessageSentTime();
  }

  getLastMessage() {
    const messagesLength = this.data.messages.length - 1;
    const message = this.data.messages[messagesLength].message;

    if (message.length > this.trimLength) {
        const trimLastMessage = message.substring(0, this.trimLength) + '...';
        return trimLastMessage;
    }

    return message;
    
  }

  getLastMessageSentTime() {
    const messagesLength = this.data.messages.length - 1;

    return this.data.messages[messagesLength].time;
  }

}
