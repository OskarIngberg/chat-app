import { Component, OnInit } from '@angular/core';

import { GroupChatService } from 'src/app/services/group-chat/group-chat.service';
import { MessageService } from 'src/app/services/message/message.service';
import { ModalsService } from 'src/app/services/modals/modals.service';

import { Messages } from 'src/app/interfaces/messages';

@Component({
  selector: 'header-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {

  constructor(
    private _GroupChatService: GroupChatService,
    private _MessageService: MessageService,
    private _ModalsService: ModalsService
  ) {
    this._GroupChatService.getChatId().subscribe(value => this.message = this.getMessage(value));
  }

  ngOnInit() {
  }

  message: any;
  disturb: boolean = true;
  bell: string = 'fas fa-bell-slash';

  getMessage(id): Messages {
    const message = this._MessageService.getMessages(id);
    return message;
  }

  removeChannel(): void {
    this._ModalsService.openRemoveModal();
  }

  doNotDisturb(): void {
    this.disturb = !this.disturb;

    if (this.disturb) {
      this.bell = 'fas fa-bell-slash';
    } else {
      this.bell = 'fas fa-bell';
    }
  }

}
