import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Utility } from 'src/app/utility.utils';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SigninComponent extends Utility implements OnInit {
  @Output() onLogin = new EventEmitter();
  userForm: FormGroup = new FormGroup({
    password: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
  });

  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) {
    super();
  }

  ngOnInit(): void {}

  submit(data: any) {
    const { email, password } = data;
    this.authService.signIn(email, password);
    if (this.authService.isUserSignedIn) {
      console.log(this.authService.isUserSignedIn);
      this.onLogin.emit(true);
    }
  }
}
