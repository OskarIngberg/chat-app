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

  constructor() {
    console.log(this.data);
    this.lastMessage = this.getLastMessage();
    this.lastMessageSentTime = this.getLastMessageSentTime();
  }

  ngOnInit() {
  }

  getLastMessage() {
    const messagesLength = this.data.messages.length - 1;
    const trimLength = 10;
    const trimLastMessage = this.data.messages[messagesLength].substring(0, trimLength) + '...';

    return trimLastMessage;
  }

  getLastMessageSentTime() {
    const messagesLength = this.data.messages.length - 1;

    return this.data.messages[messagesLength].time;
  }

}
