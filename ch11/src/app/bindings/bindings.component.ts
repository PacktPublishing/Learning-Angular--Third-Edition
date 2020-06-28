import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-bindings',
  template: `
    <p>{{title}}</p>
    <button (click)="liked.emit()">Like!</button>
  `
})
export class BindingsComponent {
  @Input() title: string;
  @Output() liked = new EventEmitter();
}
