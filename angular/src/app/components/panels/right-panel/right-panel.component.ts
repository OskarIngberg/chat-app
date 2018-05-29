import { Component, OnInit } from '@angular/core';

import { AddMessageService } from '../../../services/add-message/add-message.service';

@Component({
  selector: 'right-panel',
  templateUrl: './right-panel.component.html',
  styleUrls: ['./right-panel.component.scss']
})
export class RightPanelComponent implements OnInit {
  messages;

  constructor(private _AddMessageService: AddMessageService) {
    this.messages = this._AddMessageService.getMessages();
  }

  ngOnInit() {
  }

}
