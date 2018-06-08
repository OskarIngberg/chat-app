import { Component, OnInit } from '@angular/core';

import { UserService } from 'src/app/services/user/user.service';
import { ModalsService } from 'src/app/services/modals/modals.service';

import { User } from 'src/app/interfaces/user';

@Component({
  selector: 'userlist-modal',
  templateUrl: './userlist-modal.component.html',
  styleUrls: ['./userlist-modal.component.scss']
})
export class UserlistModalComponent implements OnInit {
  users;
  active: boolean;

  constructor(
    private _UserService: UserService,
    private _ModalsService: ModalsService
  ) {
    this._ModalsService.getUserListModalStatus().subscribe(value => {
      this.active = value;

      if (this.active) {
        this._UserService.getUsers().subscribe(users => {
          this.users = users;
        });
      }
    });
  }

  ngOnInit() {

  }

  closeModal() {
    this._ModalsService.closeUserListModal();
  }

}
