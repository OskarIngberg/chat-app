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
  users: User;
  active: boolean;
  loginUser;

  constructor(
    private _UserService: UserService,
    private _ModalsService: ModalsService
  ) {
    this._UserService.loggedInUser().subscribe(value => this.loginUser = value);
    this._ModalsService.getUserListModalStatus().subscribe(value => {
      this.active = value;

      if (this.active) {
        this._UserService.getUsers().subscribe(users => {
          for (let i = 0; i < users.length; i++) {
            if (users[i]._id === this.loginUser[0]._id) {
              users.splice(i, 1);
            }
          }
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
