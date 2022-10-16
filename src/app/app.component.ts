import { Component } from '@angular/core';
import { User } from './models/user.model';
import { AuthenticationService } from './services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'wiselike';
  currentUser: string = '';
  constructor(private authService: AuthenticationService) {
    authService.getCurrentUser().then((user: any) => {
      if (user) {
        this.currentUser = user.displayName;
      }
    });
  }
}
