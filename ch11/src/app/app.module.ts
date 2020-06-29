import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { StubComponent } from './stub/stub.component';
import { SpyComponent } from './spy/spy.component';
import { AsyncComponent } from './async/async.component';
import { BindingsComponent } from './bindings/bindings.component';
import { ListPipe } from './list.pipe';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    StubComponent,
    SpyComponent,
    AsyncComponent,
    BindingsComponent,
    ListPipe,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
