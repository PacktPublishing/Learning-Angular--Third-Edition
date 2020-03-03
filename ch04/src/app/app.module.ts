import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeroComponent } from './hero/hero.component';
import { HeroesComponent } from './heroes/heroes.component';
import { PipesComponent } from './pipes/pipes.component';
import { SortPipe } from './sort.pipe';
import { CopyrightDirective } from './copyright.directive';
import { NumericDirective } from './numeric.directive';
import { PermissionDirective } from './permission.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    HeroesComponent,
    PipesComponent,
    SortPipe,
    CopyrightDirective,
    NumericDirective,
    PermissionDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
