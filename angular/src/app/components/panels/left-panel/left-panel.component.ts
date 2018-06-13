import { Component, OnInit } from '@angular/core';

import { GroupChatService } from 'src/app/services/group-chat/group-chat.service';
import { GroupChat } from 'src/app/interfaces/group-chat';

@Component({
  selector: 'left-panel',
  templateUrl: './left-panel.component.html',
  styleUrls: ['./left-panel.component.scss']
})
export class LeftPanelComponent implements OnInit {
  groupChats: Array<GroupChat>;

  constructor(
    private _GroupChatService: GroupChatService
  ) {
    this._GroupChatService.getSearchresult().subscribe(value => this.groupChats = value);
  }

  ngOnInit() {
  }
}
