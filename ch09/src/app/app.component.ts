import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private dialog: MatDialog) {}

  showDialog() {
    this.dialog.open(DialogComponent, {
      autoFocus: false,
      data: 'My dialog'
    }).afterClosed().subscribe(result => {
      if (result) { window.alert(result); }
    });
  }
}
