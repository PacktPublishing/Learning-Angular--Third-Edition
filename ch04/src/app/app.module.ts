import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeroComponent } from './hero/hero.component';
import { HeroesComponent } from './heroes/heroes.component';
import { PipesComponent } from './pipes/pipes.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    HeroesComponent,
    PipesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
