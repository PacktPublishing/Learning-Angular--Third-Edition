import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <button mat-icon-button [class]="{pulse: isBeating}" color="accent" (click)="isBeating = !isBeating">
      <mat-icon>favorite</mat-icon>
    </button>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isBeating: boolean;
}
