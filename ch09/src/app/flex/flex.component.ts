import { Component } from '@angular/core';
import { heroes } from '../heroes';

@Component({
  selector: 'app-flex',
  templateUrl: './flex.component.html',
  styleUrls: ['./flex.component.css']
})
export class FlexComponent {
  heroes = heroes;
}
