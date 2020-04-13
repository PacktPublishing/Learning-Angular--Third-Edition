import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { KeyLoggerComponent } from './key-logger/key-logger.component';

@NgModule({
  declarations: [
    AppComponent,
    KeyLoggerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
