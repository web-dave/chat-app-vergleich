import { Routes } from '@angular/router';
import { ChatComponent } from './components/chat.component';
import { HomeComponent } from './components/home.component';

export const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'chat',
    loadComponent: () =>
      import('./components/chat.component').then((m) => m.ChatComponent),
  },
];
