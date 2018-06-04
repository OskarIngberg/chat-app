import { Component, OnInit } from '@angular/core';
import { GroupChatService } from 'src/app/services/group-chat/group-chat.service';
import { MessageService } from 'src/app/services/message/message.service';

@Component({
  selector: 'header-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {

  constructor(
    private _GroupChatService: GroupChatService,
    private _MessageService: MessageService
  ) {
    this._GroupChatService.getChatId().subscribe(value => this.title = this.getTitle(value));
  }

  ngOnInit() {
  }

  title: string;
  disturb: boolean = true;
  bell: string = 'fas fa-bell-slash';

  getTitle(id) {
    const message = this._MessageService.getMessages(id);
    return message.title;
  }

  doNotDisturb() {
    this.disturb = !this.disturb;

    if (this.disturb) {
      this.bell = 'fas fa-bell-slash';
    } else {
      this.bell = 'fas fa-bell';
    }
  }

}
