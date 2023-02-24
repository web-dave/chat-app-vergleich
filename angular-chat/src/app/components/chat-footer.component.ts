import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MessageService } from '../message.service';

@Component({
  selector: 'chat-footer',
  standalone: true,
  imports: [FormsModule],
  template: ` <div class="chat__footer">
    <form class="form" (ngSubmit)="handleSendMessage()">
      <input
        type="text"
        placeholder="Write message"
        class="message"
        name="message"
        [(ngModel)]="message"
        (input)="handleTyping()"
      />
      <button class="sendBtn" type="submit">SEND</button>
    </form>
  </div>`,
})
export class ChatFooterComponent {
  service = inject(MessageService);
  message = '';
  name = localStorage.getItem('userName');

  handleSendMessage() {
    if (this.name !== null) {
      this.service.send('message', {
        text: this.message,
        name: this.name,
        id: `${this.service.id}${Math.random()}`,
        socketID: this.service.id,
      });
    }
    this.message = '';
  }
  handleTyping() {
    if (this.name !== null) {
      this.service.send('typing', this.name + ' is typing');
    }
  }
}
