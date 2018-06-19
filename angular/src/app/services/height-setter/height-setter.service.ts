import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeightSetterService {
  headerHeight: number = 100;
  footerHeight: number = 100;

  constructor() { }

  setWindowHeight(): number {
    return window.innerHeight;
  }

  setPanelHeightWithHeader(): number {
    return window.innerHeight - this.headerHeight;
  }

  setPanelHeightWithFooterHeader(): number {
    return window.innerHeight - (this.footerHeight + this.footerHeight);
  }
}
