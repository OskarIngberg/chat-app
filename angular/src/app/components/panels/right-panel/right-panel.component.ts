import { Component, OnInit } from '@angular/core';

import { MessageService } from 'src/app/services/message/message.service';
import { Message } from 'src/app/interfaces/message';

@Component({
  selector: 'right-panel',
  templateUrl: './right-panel.component.html',
  styleUrls: ['./right-panel.component.scss']
})
export class RightPanelComponent implements OnInit {
  chat: Message;

  constructor(
    private _MessageService: MessageService
  ) {
    this._MessageService.getChat().subscribe(value => this.chat = value);
  }

  ngOnInit() {
  }
}
