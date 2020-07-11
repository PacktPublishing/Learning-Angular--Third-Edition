import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppMaterialModule } from '../app-material.module';
import { MissionsModule } from '../missions/missions.module';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroComponent } from './hero/hero.component';
import { HeroesComponent } from './heroes.component';

@NgModule({
  declarations: [
    HeroComponent,
    HeroDetailComponent,
    HeroesComponent
  ],
  imports: [
    AppMaterialModule,
    CommonModule,
    FlexLayoutModule,
    MissionsModule,
    ReactiveFormsModule,
    RouterModule
  ]
})
export class HeroesModule { }
