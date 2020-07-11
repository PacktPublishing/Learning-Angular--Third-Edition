import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { MissionService } from '../missions.service';

@Component({
  selector: 'app-mission',
  templateUrl: './mission.component.html',
  styles: ['mat-dialog-content { height: 200px; }']
})
export class MissionComponent implements OnInit {

  missionForm: FormGroup;
  priorities = ['low', 'medium', 'high'];

  constructor(
    private builder: FormBuilder,
    private missionService: MissionService,
    @Inject(MAT_DIALOG_DATA) private data: any,
    private dialogRef: MatDialogRef<MissionComponent>
  ) { }

  ngOnInit() {
    this.missionForm = this.builder.group({
      title: ['', Validators.required],
      priority: ['low']
    });
  }

  save() {
    this.missionService.assignMission(this.missionForm.value, this.data).subscribe(() => this.dialogRef.close());
  }

}
