import { Component } from '@angular/core';

import { ChatService } from 'src/app/services/chat-service/chat-service.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    private _ChatService: ChatService,
    private _UserService: UserService
  ){
    this._UserService.loginUser('OskarIngberg', '123');
  }

  ngOnInit() {
    this._ChatService.messages().subscribe(message => {
      console.log(message);
    });
  }
}
