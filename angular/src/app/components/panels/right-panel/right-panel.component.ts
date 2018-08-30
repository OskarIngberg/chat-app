import { Component, OnInit, Input } from '@angular/core';

import { MessageService } from 'src/app/services/message/message.service';
import { IMessage } from 'src/app/interfaces/message';

@Component({
  selector: 'right-panel',
  templateUrl: './right-panel.component.html',
  styleUrls: ['./right-panel.component.scss']
})
export class RightPanelComponent implements OnInit {
  chat: IMessage;

  constructor(
    private _MessageService: MessageService
  ) {
    this._MessageService.getChat().subscribe(value => this.chat = value);
  }

  ngOnInit() {
  }
}
