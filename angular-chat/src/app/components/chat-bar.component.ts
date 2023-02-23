import { Component, inject } from '@angular/core';
import { SocketService } from 'src/main';

@Component({
  selector: 'chat-bar',
  standalone: true,
  imports: [],
  template: ` <div class="chat__sidebar">
    <h2>Open Chat</h2>
    <div>
      <h4 class="chat__header">ACTIVE USERS</h4>
      <div class="chat__users">
        <!-- {users.map((user) => (
            <p key={user.socketID}>{user.userName}</p>
          ))} -->
      </div>
    </div>
  </div>`,
})
export class ChatBarComponent {
  socket = inject(SocketService);
}
