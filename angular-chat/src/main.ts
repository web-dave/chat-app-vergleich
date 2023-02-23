import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app/app-routes';
import { AppComponent } from './app/app.component';
import socketIO from 'socket.io-client';
import { InjectionToken } from '@angular/core';

export const SocketService = new InjectionToken('socket', {
  providedIn: 'root',
  factory: () => (socketIO as any).connect('http://localhost:4000'),
});

bootstrapApplication(AppComponent, {
  providers: [provideRouter(appRoutes)],
}).catch((err) => console.error(err));
