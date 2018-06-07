import { Component } from '@angular/core';

import { ChatService } from 'src/app/services/chat-service/chat-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private _ChatService: ChatService){ }

  ngOnInit() {
    this._ChatService.messages().subscribe(message => {
      console.log(message);
    });
  }
}
