import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import socketIO from 'socket.io-client';
import { IMessage, ITyping, IUser } from './models';

@Injectable({ providedIn: 'root' })
export class MessageService {
  private socket = (socketIO as any).connect('http://localhost:4000');
  id = this.socket.id;

  private users$$ = new BehaviorSubject<IUser[]>([]);
  users$ = this.users$$.asObservable();

  private messages$$ = new BehaviorSubject<IMessage[]>([]);
  messages$ = this.messages$$.asObservable();

  private typingStatus$$ = new BehaviorSubject<ITyping>('');
  typingStatus$ = this.typingStatus$$.asObservable();

  send(
    signal: 'typing' | 'message' | 'newUser',
    message: IMessage | ITyping | IUser
  ) {
    this.socket.emit(signal, message);
  }
  constructor() {
    this.socket.on('newUserResponse', (data: IUser[]) => {
      console.log('newUserResponse', data);
      this.users$$.next(data);
    });
    this.socket.on('typingResponse', (data: ITyping) => {
      console.log('typingResponse', data);
      this.typingStatus$$.next(data);
    });
    this.socket.on('messageResponse', (data: IMessage) => {
      console.log('messageResponse', data);
      this.messages$$.next([...this.messages$$.value, data]);
    });
  }
}
