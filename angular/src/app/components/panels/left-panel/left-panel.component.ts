import { Component, OnInit } from '@angular/core';

import { GroupChatService } from 'src/app/services/group-chat/group-chat.service';
import { IGroupChat } from 'src/app/interfaces/group-chat';
import { HeaderHelperService } from 'src/app/services/header-helper/header-helper.service';

@Component({
  selector: 'left-panel',
  templateUrl: './left-panel.component.html',
  styleUrls: ['./left-panel.component.scss']
})
export class LeftPanelComponent implements OnInit {
  activeHeader: string;
  groupChats: Array<IGroupChat>;

  constructor(
    private _GroupChatService: GroupChatService,
    private _HeaderHelperService: HeaderHelperService
  ) {
    this._HeaderHelperService.getActiveHeader().subscribe(value => this.activeHeader = value);
    this._GroupChatService.getSearchresult().subscribe(value => this.groupChats = value);
  }

  ngOnInit() {
  }
}
