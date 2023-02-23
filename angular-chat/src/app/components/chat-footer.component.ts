import { Component, inject } from '@angular/core';
import { SocketService } from 'src/main';

@Component({
  selector: 'chat-footer',
  standalone: true,
  imports: [],
  template: ``,
})
export class ChatFooterComponent {
  socket = inject(SocketService);
}
