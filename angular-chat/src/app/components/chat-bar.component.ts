import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: '[chat-bar]',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="chat__sidebar">
      <h2>Open Chat</h2>
      <div>
        <h4 class="chat__header">ACTIVE USERS</h4>
        <div class="chat__users">
          <p *ngFor="let user of users$ | async" [attr.key]="user.socketID">
            {{ user.userName }}
          </p>
        </div>
      </div>
    </div>
  `,
})
export class ChatBarComponent {
  users$ = inject(MessageService).users$;
}
