import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ReactiveLoginComponent } from './reactive-login/reactive-login.component';
import { HeroComponent } from './hero/hero.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ReactiveLoginComponent,
    HeroComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
