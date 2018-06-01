import { Injectable } from '@angular/core';

import { mockMessages } from '../../mockData/mockMessages';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor() { }

  getMessages(id) {
    let messages;

    mockMessages.forEach(message => {
      if (message.id === id) {
        messages = message;
      }
    });

    return messages;
  }
}
