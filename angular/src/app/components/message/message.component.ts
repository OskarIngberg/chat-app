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
    this._UserService.getUsers().subscribe(value => { 
      this.username = value.username;
      console.log(this.username);
    });
  }

}
