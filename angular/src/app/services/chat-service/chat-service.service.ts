import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import * as io from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private socket: SocketIOClient.Socket;

  constructor() {
    this.socket = io(environment.socketUrl);
  }

  // EMITTER
  sendMessage(messageId, userId) {
    this.socket.emit('clientMessage', { messageId, userId });
  }

  // HANDLER
  messages() {
    return Observable.create(observer => {
      this.socket.on('serverMessage', message => {
        observer.next(message);
      });
    });
  }
}
