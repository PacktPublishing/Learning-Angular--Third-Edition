import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppMaterialModule } from '../app-material.module';
import { MissionComponent } from './mission/mission.component';

@NgModule({
  declarations: [MissionComponent],
  imports: [
    AppMaterialModule,
    CommonModule,
    ReactiveFormsModule
  ]
})
export class MissionsModule { }
