import { Component } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'alkfejlbead-client';

  constructor(public authService: AuthService) {}

  logout()
  {
    this.authService.logout();
  }
}