import { Component, OnInit } from '@angular/core';

import { ModalsService } from 'src/app/services/modals/modals.service';

@Component({
  selector: 'add-chat',
  templateUrl: './add-chat.component.html',
  styleUrls: ['./add-chat.component.scss']
})
export class AddChatComponent implements OnInit {

  constructor(
    private _ModalsService: ModalsService
  ) { }

  ngOnInit() {

  }

  openUserListModal(): void {
    this._ModalsService.openUserListModal();
  }

}
