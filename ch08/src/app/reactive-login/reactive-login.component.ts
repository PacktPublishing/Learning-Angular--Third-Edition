import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, AbstractControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-login',
  templateUrl: './reactive-login.component.html',
  styleUrls: ['./reactive-login.component.css']
})
export class ReactiveLoginComponent implements OnInit {

  loginForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6)
    ])
  });

  get username(): AbstractControl {
    return this.loginForm.controls.username;
  }

  get password(): AbstractControl {
    return this.loginForm.controls.password;
  }

  constructor() { }

  ngOnInit(): void {
  }

  login() {
    console.log('User: ' + this.username.value);
    console.log('Password: ' + this.password.value);
  }
}
