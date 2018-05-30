import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeightSetterService {

  constructor() { }

  setWindowHeight() {
    return window.innerHeight - 101;
  }
}
