import { Component, OnInit } from '@angular/core';

import { GroupChatService } from '../../../services/group-chat/group-chat.service';
import { HeightSetterService } from '../../../services/height-setter/height-setter.service';

@Component({
  selector: 'left-panel',
  templateUrl: './left-panel.component.html',
  styleUrls: ['./left-panel.component.scss']
})
export class LeftPanelComponent implements OnInit {
  windowHeight: number;
  groupChats;

  constructor(
    private _GroupChatService: GroupChatService,
    private _HeightSetterService: HeightSetterService
  ) {
    this.windowHeight = this._HeightSetterService.setWindowHeight();
    this.groupChats = this._GroupChatService.getGroupChats();
  }

  ngOnInit() {
  }

  onResize() {
    this.windowHeight = this._HeightSetterService.setWindowHeight();
  }

  changeGroupChat(id) {
    this._GroupChatService.changeChat(id);
  }

}
