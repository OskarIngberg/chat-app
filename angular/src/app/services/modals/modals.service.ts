import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalsService {

  showRemoveModal: BehaviorSubject<boolean>;

  constructor() {
    this.showRemoveModal = new BehaviorSubject<boolean>(false);
  }

  openRemoveModal() {
    this.showRemoveModal.next(true);
  }

  closeRemoveModal() {
    this.showRemoveModal.next(false);
  }

  getRemoveModalStatus(): Observable<boolean> {
    return this.showRemoveModal;
  }
}
