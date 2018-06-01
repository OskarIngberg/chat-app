import { Injectable } from '@angular/core';

import { mockMessages } from '../../mockData/mockMessages';

@Injectable({
  providedIn: 'root'
})
export class AddMessageService {

  constructor() { }

  sendMessage(message) {
    // mockMessages.messages.push(
    //   {
    //     image: '../../assets/1.jpg',
    //     user: 'Oskar Ingberg',
    //     time: Date.now(),
    //     message: message
    //   }
    // );
  }
}
