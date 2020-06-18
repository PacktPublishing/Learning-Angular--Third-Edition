import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-size',
  templateUrl: './size.component.html',
  styleUrls: ['./size.component.css'],
  animations: [
    trigger('sizeAnimation', [
      state('small', style({
        transform: 'scale(1)',
        backgroundColor: 'green'
      })),
      state('large', style({
        transform: 'scale(1.4)',
        backgroundColor: 'red'
      })),
      transition('small => large', animate('100ms ease-in')),
      transition('large => small', animate('100ms ease-out'))
    ])
  ]
})
export class SizeComponent {
  state: string;

  started(evt: AnimationEvent) {
    console.log('Animation started');
  }

  finished(evt: AnimationEvent) {
    console.log('Animation finished');
  }
}
