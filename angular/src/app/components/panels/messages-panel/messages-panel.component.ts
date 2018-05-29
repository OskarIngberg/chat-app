import { Component, OnInit } from '@angular/core';

import { AddMessageService } from '../../../services/add-message/add-message.service';

@Component({
  selector: 'messages-panel',
  templateUrl: './messages-panel.component.html',
  styleUrls: ['./messages-panel.component.scss']
})
export class MessagesPanelComponent implements OnInit {

  constructor(private _AddMessageService: AddMessageService) { }

  ngOnInit() {
  }

  onKey(event) {
    if (event.key === 'Enter') {
      this._AddMessageService.sendMessage(event.srcElement.value);
    }
  }

}
