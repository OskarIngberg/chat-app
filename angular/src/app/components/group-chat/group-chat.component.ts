import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'group-chat',
  templateUrl: './group-chat.component.html',
  styleUrls: ['./group-chat.component.scss']
})
export class GroupChatComponent implements OnInit {
  @Input() data;

  constructor() { }

  ngOnInit() {
  }

}
