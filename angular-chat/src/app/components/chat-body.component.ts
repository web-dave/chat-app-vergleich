import { CommonModule } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { Router } from '@angular/router';
import { IMessage, ITyping } from '../models';

@Component({
  selector: 'chat-body',
  standalone: true,
  imports: [CommonModule],
  template: ` <header class="chat__mainHeader">
      <p>Hangout with Colleagues</p>
      <button class="leaveChat__btn" (click)="handleLeaveChat()">
        LEAVE CHAT
      </button>
    </header>

    <div class="message__container">
      <ng-container *ngFor="let message of messages">
        <div
          *ngIf="message.name === me; else notMe"
          class="message__chats"
          [attr.key]="message.id"
        >
          <p class="sender__name">You</p>
          <div class="message__sender">
            <p>{{ message.text }}</p>
          </div>
        </div>
        <ng-template #notMe>
          <div class="message__chats" [attr.key]="message.id">
            <p>{{ message.name }}</p>
            <div class="message__recipient">
              <p>{{ message.text }}</p>
            </div>
          </div>
        </ng-template>
      </ng-container>

      <div class="message__status">
        <p>{{ typingStatus }}</p>
      </div>
      <div [attr.ref]="lastMessageRef"></div>
    </div>`,
})
export class ChatBodyComponent {
  @Input() messages: IMessage[] | null = [];
  @Input() typingStatus: ITyping | null = 'typingStatus';
  @Input() lastMessageRef = 'lastMessageRef';
  me = localStorage.getItem('userName');

  router = inject(Router);

  handleLeaveChat() {
    localStorage.removeItem('userName');
    this.router.navigate(['/']);
  }
}
