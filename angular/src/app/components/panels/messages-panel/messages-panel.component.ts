import { Component, OnInit } from '@angular/core';

import { MessageService } from 'src/app/services/message/message.service';
import { Message } from 'src/app/interfaces/message';

@Component({
  selector: 'messages-panel',
  templateUrl: './messages-panel.component.html',
  styleUrls: ['./messages-panel.component.scss']
})
export class MessagesPanelComponent implements OnInit {

  chat: Message;

  constructor(
    private _MessageService: MessageService
  ) {
    this._MessageService.getChat().subscribe(value => this.chat = value);
  }

  ngOnInit() {
  }

  onKey(event): void {
    if (event.key === 'Enter') {
      this._MessageService.sendMessage(event.srcElement.value);
      event.srcElement.value = '';
    }
  }

}
