import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from '../message.service';

@Component({
  selector: 'home',
  standalone: true,
  imports: [FormsModule],
  template: `
    <form class="home__container" (ngSubmit)="handleSubmit()">
      <h2 class="home__header">Sign in to Open Chat</h2>
      <label for="username">Username</label>
      <input
        class="username__input"
        type="text"
        minLength="6"
        name="username"
        [(ngModel)]="userName"
      />
      <button class="home__cta">SIGN IN</button>
    </form>
  `,
})
export class HomeComponent {
  userName = '';
  router = inject(Router);
  service = inject(MessageService);
  handleSubmit() {
    localStorage.setItem('userName', this.userName);
    this.service.send('newUser', {
      userName: this.userName,
      socketID: this.service.id,
    });
    this.router.navigate(['/chat']);
  }
}
