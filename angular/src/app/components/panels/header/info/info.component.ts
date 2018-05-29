import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'header-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  disturb: boolean = true;
  bell: string = 'fas fa-bell-slash';

  doNotDisturb() {
    this.disturb = !this.disturb;

    if (this.disturb) {
      this.bell = 'fas fa-bell-slash';
    } else {
      this.bell = 'fas fa-bell';
    }
  }

}
