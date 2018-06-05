import { Component, OnInit } from '@angular/core';

import { GroupChatService } from 'src/app/services/group-chat/group-chat.service';

@Component({
  selector: 'header-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  constructor(
    private _GroupChatService: GroupChatService
  ) { }

  ngOnInit() {
  }

  searchGroupChats(event) {
    this._GroupChatService.searchGroupChats(event.srcElement.value);
  }

}
