import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, AbstractControl, Validators, FormBuilder } from '@angular/forms';

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
  showPasswordHint: boolean;

  get username(): AbstractControl {
    return this.loginForm.controls.username;
  }

  get password(): AbstractControl {
    return this.loginForm.controls.password;
  }

  constructor(private builder: FormBuilder) { }

  ngOnInit() {
    this.password.valueChanges.subscribe((value: string) => {
      this.showPasswordHint = value.length < 6;
    });
  }

  login() {
    console.log('User: ' + this.username.value);
    console.log('Password: ' + this.password.value);
  }

  private buildForm() {
    this.loginForm = this.builder.group({
      username: ['', Validators.required],
      password: ['', [
        Validators.required,
        Validators.minLength(6)
      ]]
    });
  }
}
