import { Component, OnInit } from '@angular/core';

import { AddMessageService } from 'src/app/services/add-message/add-message.service';
import { HeightSetterService } from 'src/app/services/height-setter/height-setter.service';
import { GroupChatService } from 'src/app/services/group-chat/group-chat.service';
import { MessageService } from 'src/app/services/message/message.service';
import { Messages } from 'src/app/interfaces/messages';

@Component({
  selector: 'right-panel',
  templateUrl: './right-panel.component.html',
  styleUrls: ['./right-panel.component.scss']
})
export class RightPanelComponent implements OnInit {
  windowHeight: number;
  messages: Messages;
  chatId: number;

  constructor(
    private _AddMessageService: AddMessageService,
    private _HeightSetterService: HeightSetterService,
    private _GroupChatService: GroupChatService,
    private _MessageService: MessageService
  ) {
    this.windowHeight = this._HeightSetterService.setWindowHeight();
    this._GroupChatService.getChatId().subscribe(value => this.getMessages(value));
  }

  ngOnInit() {
  }

  getMessages(id) {
    this.messages = this._MessageService.getMessages(id);
  }

  onResize(event) {
    this.windowHeight = this._HeightSetterService.setWindowHeight();
  }

}
