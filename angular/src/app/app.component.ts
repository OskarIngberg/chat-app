import { Component } from '@angular/core';

import { ChatService } from 'src/app/services/chat-service/chat-service.service';
import { UserService } from 'src/app/services/user/user.service';
import { HeightSetterService } from 'src/app/services/height-setter/height-setter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  windowHeight: number;

  constructor(
    private _ChatService: ChatService,
    private _UserService: UserService,
    private _HeightSetterService: HeightSetterService 
  ){
    this.windowHeight = this._HeightSetterService.setWindowHeight();
    this._UserService.loginUser('OskarIngberg', '123');
  }

  onResize() {
    this.windowHeight = this._HeightSetterService.setWindowHeight();
  }
}
