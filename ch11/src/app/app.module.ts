import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StubComponent } from './stub/stub.component';
import { SpyComponent } from './spy/spy.component';
import { AsyncComponent } from './async/async.component';
import { BindingsComponent } from './bindings/bindings.component';

@NgModule({
  declarations: [
    AppComponent,
    StubComponent,
    SpyComponent,
    AsyncComponent,
    BindingsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
