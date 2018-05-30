import { Component, OnInit } from '@angular/core';

import { AddMessageService } from '../../../services/add-message/add-message.service';
import { HeightSetterService } from '../../../services/height-setter/height-setter.service';

@Component({
  selector: 'right-panel',
  templateUrl: './right-panel.component.html',
  styleUrls: ['./right-panel.component.scss']
})
export class RightPanelComponent implements OnInit {
  windowHeight: number;
  messages;

  constructor(
    private _AddMessageService: AddMessageService,
    private _HeightSetterService: HeightSetterService
  ) {
    this.windowHeight = this._HeightSetterService.setWindowHeight();
    this.messages = this._AddMessageService.getMessages();
  }

  ngOnInit() {
  }

  onResize(event) {
    this.windowHeight = this._HeightSetterService.setWindowHeight();
  }

}
