import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeightSetterService {
  footerHeight: number = 101;

  constructor() { }

  setWindowHeight(): number {
    return window.innerHeight - this.footerHeight;
  }
}
