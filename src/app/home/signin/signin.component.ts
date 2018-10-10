import { Component, OnInit, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../core/auth/auth.service';
import { Router } from '@angular/router';
import { ViewChild } from '@angular/core';
import { PlatformDetectorService } from '../../core/platform-detector/platform-detector.service';

@Component({
  templateUrl: 'signin.component.html'
})
export class SignInComponent implements OnInit {
  loginForm: FormGroup;

  // the @ViewChild() decorator defines a element of the DOM
  @ViewChild('usernameInput')
  usernameInput: ElementRef<HTMLInputElement>;

  constructor(
    private _formBuilder: FormBuilder,
    private _authService: AuthService,
    private _router: Router,
    private _platformDetectorService: PlatformDetectorService
  ) {}

  // here we are building our form
  ngOnInit(): void {
    this.loginForm = this._formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  login() {
    const username = this.loginForm.get('username').value;
    const password = this.loginForm.get('password').value;

    this._authService.authenticate(username, password).subscribe(
      () => this._router.navigate(['user', username]),
      err => {
        console.log(err);
        this.loginForm.reset();
        // here we only set the focus if isPlatformBrowser returns true
        this._platformDetectorService.isPlatformBrowser() &&
            this.usernameInput.nativeElement.focus();
        alert('Invalid username or password!');
      }
    );
  }
}
