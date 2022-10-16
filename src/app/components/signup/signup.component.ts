import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Utility } from 'src/app/utility.utils';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent extends Utility implements OnInit {
  @Output() onLogin = new EventEmitter();
  userForm: FormGroup = new FormGroup({
    displayName: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    confirmPassword: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
  });
  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) {
    super();
  }

  ngOnInit(): void {}

  submit(formValue: any) {
    this.authService.signUpWithEmail(formValue, formValue.password).then(
      (data) => {
        console.log('data', JSON.stringify(data));
        this.router.navigate(['dashboard']);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
