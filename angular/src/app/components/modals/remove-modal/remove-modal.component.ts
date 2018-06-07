import { Component, OnInit } from '@angular/core';

import { ModalsService } from 'src/app/services/modals/modals.service';

@Component({
  selector: 'remove-modal',
  templateUrl: './remove-modal.component.html',
  styleUrls: ['./remove-modal.component.scss']
})
export class RemoveModalComponent implements OnInit {
  active: boolean = false;

  constructor(
    private _ModalsService: ModalsService
  ) {
    this._ModalsService.getRemoveModalStatus().subscribe(value => this.active = value);
  }

  ngOnInit() {
  }

  closeModal(): void {
    this._ModalsService.closeRemoveModal();
  }

}
