import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { SizeComponent } from './size/size.component';
import { InvisibleComponent } from './invisible/invisible.component';
import { TextResizeComponent } from './text-resize/text-resize.component';

@NgModule({
  declarations: [
    AppComponent,
    SizeComponent,
    InvisibleComponent,
    TextResizeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
