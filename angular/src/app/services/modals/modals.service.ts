import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalsService {

  showRemoveModal: BehaviorSubject<boolean>;
  showUserListModal: BehaviorSubject<boolean>;

  constructor() {
    this.showRemoveModal = new BehaviorSubject<boolean>(false);
    this.showUserListModal = new BehaviorSubject<boolean>(false);
  }

  openUserListModal(): void {
    this.showUserListModal.next(true);
  }

  closeUserListModal(): void {
    this.showUserListModal.next(false);
  }

  openRemoveModal(): void {
    this.showRemoveModal.next(true);
  }

  closeRemoveModal(): void {
    this.showRemoveModal.next(false);
  }

  getRemoveModalStatus(): Observable<boolean> {
    return this.showRemoveModal;
  }

  getUserListModalStatus(): Observable<boolean> {
    return this.showUserListModal;
  }
}
