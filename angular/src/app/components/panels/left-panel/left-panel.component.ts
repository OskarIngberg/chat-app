import { Component, OnInit } from '@angular/core';

import { GroupChatService } from 'src/app/services/group-chat/group-chat.service';
import { HeightSetterService } from 'src/app/services/height-setter/height-setter.service';

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
    this._GroupChatService.getSearchresult().subscribe(value => this.groupChats = value);
  }

  ngOnInit() {
  }

  onResize() {
    this.windowHeight = this._HeightSetterService.setWindowHeight();
  }

}
