import { Component, OnInit } from '@angular/core';

import { ChatService } from 'src/app/services/chat-service/chat-service.service';
import { HeightSetterService } from 'src/app/services/height-setter/height-setter.service';
import { HeaderHelperService } from 'src/app/services/header-helper/header-helper.service';
import { IMessage } from 'src/app/interfaces/message';

@Component({
  selector: 'chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  windowHeight: number;
  chat: IMessage;

  constructor(
    private _ChatService: ChatService,
    private _HeightSetterService: HeightSetterService,
    private _headerHelperService: HeaderHelperService
  ) {
    this.windowHeight = this._HeightSetterService.setPanelHeightWithFooterHeader();
    this._headerHelperService.setActiveHeader('chat');
  }

  ngOnInit() {
    this._ChatService.messages().subscribe(message => {
      console.log(message);
    });
  }

  onResize() {
    this.windowHeight = this._HeightSetterService.setPanelHeightWithFooterHeader();
  }

}
