import { Component, OnInit } from '@angular/core';

import { UserService } from 'src/app/services/user/user.service';
import { HeaderHelperService } from 'src/app/services/header-helper/header-helper.service';
import { HeightSetterService } from 'src/app/services/height-setter/height-setter.service';

import { User } from 'src/app/interfaces/user';

@Component({
  selector: 'add-chat',
  templateUrl: './add-chat.component.html',
  styleUrls: ['./add-chat.component.scss']
})
export class AddChatComponent implements OnInit {
  windowHeight: number;
  loginUser: User;
  users: Array<User>;

  constructor(
    private _UserService: UserService,
    private _HeaderHelperService: HeaderHelperService,
    private _HeightSetterService: HeightSetterService
  ) {
    this.windowHeight = this._HeightSetterService.setPanelHeightWithHeader();
    this._HeaderHelperService.setActiveHeader('userlist');
    this._UserService.loggedInUser().subscribe(loginedUser => {
      if (loginedUser.length > 0) {
        this._UserService.returnUsers().subscribe(users => {
          for (let i = 0; i < users.length; i++) {
            if (users[i]._id === loginedUser[0]._id) {
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

  onResize() {
    this.windowHeight = this._HeightSetterService.setPanelHeightWithHeader();
  }

}
