import { Injectable } from '@angular/core';
import { io } from 'socket.io-client';
const socket = io('/', {path: "/ws"});


@Injectable({
  providedIn: 'root'
})
export class SocketService {
  constructor() { 
    socket.emit('test', 'init test');
  }
}
