import { Component } from '@angular/core';
import { heroes } from '../heroes';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Hero } from '../hero.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  heroes = heroes;

  reorder(event: CdkDragDrop<Hero[]>) {
    moveItemInArray(this.heroes, event.previousIndex, event.currentIndex);
  }

}
