import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HeaderHelperService {
  private activeHeader: BehaviorSubject<string>;

  constructor() {
    this.activeHeader = new BehaviorSubject<string>('login');
  }

  setActiveHeader(header: string): void {
    this.activeHeader.next(header);
  }

  getActiveHeader(): Observable<string> {
    return this.activeHeader;
  }
}
