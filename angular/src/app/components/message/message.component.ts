import { Component, OnInit, Input } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {

  @Input() data;

  username: string;

  constructor(
    private _UserService: UserService
  ) { }

  ngOnInit() {
    this.username = this._UserService.getUsername(this.data.user);
  }

}
