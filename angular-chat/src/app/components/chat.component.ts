import { Component } from '@angular/core';
import { ChatBarComponent } from './chat-bar.component';
import { ChatBodyComponent } from './chat-body.component';
import { ChatFooterComponent } from './chat-footer.component';

@Component({
  selector: 'chat',
  standalone: true,
  imports: [ChatBarComponent, ChatBodyComponent, ChatFooterComponent],
  template: `
  <div class="chat">
      <chat-bar />
      <div class="chat__main">
          <chat-body
          [messages]="messages" 
          [typingStatus]="typingStatus" 
          [lastMessageRef]="lastMessageRef" 
        />
        <chat-footer />
      </div>
    </div>`,
})
export class ChatComponent {
  messages: any;
  typingStatus: any;
  lastMessageRef: any;
}
