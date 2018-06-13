import { Component, OnInit } from '@angular/core';

import { MessageService } from 'src/app/services/message/message.service';
import { ModalsService } from 'src/app/services/modals/modals.service';

import { Messages } from 'src/app/interfaces/messages';

@Component({
  selector: 'header-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {
  chat: any;
  disturb: boolean = true;
  bell: string = 'fas fa-bell-slash';

  constructor(
    private _MessageService: MessageService,
    private _ModalsService: ModalsService
  ) {
    this._MessageService.getChat().subscribe(value => { this.chat = value; });
  }

  ngOnInit() {
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
