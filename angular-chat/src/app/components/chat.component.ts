import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MessageService } from '../message.service';
import { ChatBarComponent } from './chat-bar.component';
import { ChatBodyComponent } from './chat-body.component';
import { ChatFooterComponent } from './chat-footer.component';

@Component({
  selector: 'chat',
  standalone: true,
  imports: [
    CommonModule,
    ChatBarComponent,
    ChatBodyComponent,
    ChatFooterComponent,
  ],
  template: `
  <div class="chat" >
  <div class="chat__sidebar" chat-bar></div>
      <div class="chat__main">
          <chat-body
          [messages]="service.messages$|async" 
          [typingStatus]="service.typingStatus$ | async" 
          [lastMessageRef]="lastMessageRef" 
        />
        <chat-footer />
      </div>
    </div>`,
})
export class ChatComponent {
  service = inject(MessageService);
  messages: any;
  typingStatus: any;
  lastMessageRef: any;
}
