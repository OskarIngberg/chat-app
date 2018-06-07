import { Injectable } from '@angular/core';

import { mockMessages } from 'src/app/mockData/mockMessages';
import { Messages } from 'src/app/interfaces/messages';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor() { }

  getMessages(id): Messages {
    let messages;

    mockMessages.forEach(message => {
      if (message.id === id) {
        messages = message;
      }
    });

    return messages;
  }
}
