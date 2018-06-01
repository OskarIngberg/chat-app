import { Component, OnInit } from '@angular/core';

import { AddMessageService } from '../../../services/add-message/add-message.service';
import { GroupChatService } from '../../../services/group-chat/group-chat.service';

@Component({
  selector: 'messages-panel',
  templateUrl: './messages-panel.component.html',
  styleUrls: ['./messages-panel.component.scss']
})
export class MessagesPanelComponent implements OnInit {

  chatId: number;

  constructor(
    private _AddMessageService: AddMessageService,
    private _GroupChatService: GroupChatService
  ) {
    this._GroupChatService.getChatId().subscribe(value => this.chatId = value);
  }

  ngOnInit() {
  }

  onKey(event) {
    if (event.key === 'Enter') {
      this._AddMessageService.sendMessage(event.srcElement.value);
    }
  }

}
