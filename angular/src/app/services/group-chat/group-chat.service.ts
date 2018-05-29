import { Injectable } from '@angular/core';
import { WSAEHOSTUNREACH } from 'constants';

@Injectable({
  providedIn: 'root'
})
export class GroupChatService {

  mockGroupChats = [
    {
      id: 1,
      image: '../../assets/1.jpg',
      time: Date.now(),
      title: 'Markus Markusson',
      lastMessage: 'Lorem ipsum dolor sit amet, consectetur...',
      active: true
    },
    {
      id: 2,
      image: '../../assets/1.jpg',
      time: Date.now(),
      title: 'Anders Andersson',
      lastMessage: 'Lorem ipsum dolor sit amet, consectetur...',
      active: false
    },
    {
      id: 3,
      image: '../../assets/1.jpg',
      time: Date.now(),
      title: 'Magnus Magnusson',
      lastMessage: 'Lorem ipsum dolor sit amet, consectetur...',
      active: false
    }
  ];

  constructor() { }

  getGroupChats() {
    return this.mockGroupChats;
  }
}
