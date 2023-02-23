import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './components/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent],
  template: `
    <div>
      <router-outlet></router-outlet>
    </div>
  `,
})
export class AppComponent {
  title = 'angular-chat';
}
