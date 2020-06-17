import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-invisible',
  templateUrl: './invisible.component.html',
  styleUrls: ['./invisible.component.css'],
  animations: [
    trigger('flyInOut', [
      state('in', style({transform: 'translateX(0)'})),
      transition('void => *', [
        style({transform: 'translateX(-100%)'}),
        animate(500)
      ]),
      transition('* => void', [
        animate(500, style({transform: 'translateX(200%)'}))
      ])
    ])
  ]
})
export class InvisibleComponent {
  state: string;
  showMe: boolean;

  appear() {
    this.state = 'in';
    this.showMe = true;
  }

  disappear() {
    this.showMe = false;
  }

}
