import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddMessageService {

  mockMessages = 
    {
      image: '../../assets/1.jpg',
      title: 'Markus Markusson',
      messages: [
        {
          image: '../../assets/1.jpg',
          user: 'Markus Markusson',
          time: Date.now(),
          message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dictum lacinia leo non ultrices. Sed blandit velit a nulla efficitur, at fringilla nibh consectetur. Curabitur vel dolor id felis fringilla fermentum.'
        }
      ]
    };

  constructor() { }

  getMessages() {
    return this.mockMessages;
  }

  sendMessage(message) {
    this.mockMessages.messages.push(
      {
        image: '../../assets/1.jpg',
        user: 'Oskar Ingberg',
        time: Date.now(),
        message: message
      }
    );
  }
}
