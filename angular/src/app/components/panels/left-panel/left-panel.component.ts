import { Component, OnInit } from '@angular/core';

import { GroupChatService } from '../../../services/group-chat/group-chat.service';

@Component({
  selector: 'left-panel',
  templateUrl: './left-panel.component.html',
  styleUrls: ['./left-panel.component.scss']
})
export class LeftPanelComponent implements OnInit {
  windowHeight: number;
  groupChats;

  constructor(private _GroupChatService: GroupChatService) {
    this.windowHeight = window.innerHeight - 101;
    this.groupChats = this._GroupChatService.getGroupChats();
  }

  ngOnInit() {
  }

  onResize() {
    this.windowHeight = window.innerHeight - 101;
  }

  changeGroupChat(id) {
    this.groupChats.forEach(groupChat => {
      if (groupChat.id === id) {
        groupChat.active = true;
      } else {
        groupChat.active = false;
      }
    });
  }

}
