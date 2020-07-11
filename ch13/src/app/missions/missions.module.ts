import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppMaterialModule } from '../app-material.module';
import { MissionListComponent } from './mission-list/mission-list.component';
import { MissionComponent } from './mission/mission.component';

@NgModule({
  declarations: [
    MissionComponent,
    MissionListComponent
  ],
  imports: [
    AppMaterialModule,
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [MissionListComponent]
})
export class MissionsModule { }
