import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.authService.getCurrentUser().then((user) => {
      if (user) {
        this.router.navigate(['dashboard']);
      }
    });
  }
}
