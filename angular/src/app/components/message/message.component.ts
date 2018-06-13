import { Component, OnInit, Input } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';
import { User } from 'src/app/interfaces/user';

@Component({
  selector: 'message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {

  @Input() data;

  user: User;

  constructor(
    private _UserService: UserService
  ) {}

  ngOnInit() {
    this._UserService.getUser(this.data.user).subscribe(value => { this.user = value[0]; });
  }

}
