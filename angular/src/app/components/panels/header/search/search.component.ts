import { Component, OnInit } from '@angular/core';

import { GroupChatService } from 'src/app/services/group-chat/group-chat.service';
import { HeaderHelperService } from 'src/app/services/header-helper/header-helper.service';

@Component({
  selector: 'header-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  activeHeader: string;

  constructor(
    private _GroupChatService: GroupChatService,
    private _HeaderHelperService: HeaderHelperService
  ) {
    this._HeaderHelperService.getActiveHeader().subscribe(value => this.activeHeader = value);
  }

  ngOnInit() {
  }

  searchGroupChats(event): void {
    this._GroupChatService.searchGroupChats(event.srcElement.value);
  }

}
