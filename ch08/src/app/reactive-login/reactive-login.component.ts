import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-reactive-login',
  templateUrl: './reactive-login.component.html',
  styleUrls: ['./reactive-login.component.css']
})
export class ReactiveLoginComponent implements OnInit {

  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  });

  get username(): AbstractControl {
    return this.loginForm.controls.username;
  }

  constructor() { }

  ngOnInit(): void {
  }

  login() {
    console.log('User: ' + this.username.value);
    console.log('Password: ' + this.loginForm.controls.password.value);
  }
}

