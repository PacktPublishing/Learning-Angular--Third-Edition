import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero.model';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[] = [
    { id: 1, name: 'Boothstomper', team: 'avengers' },
    { id: 2, name: 'Drogfisher', team: 'avengers' },
    { id: 3, name: 'Bloodyllips', team: 'villains' },
    { id: 4, name: 'Mr Bu Moverse', team: 'villains' },
    { id: 5, name: 'Piranhaelli', team: '' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  trackByHeroes(index: number, hero: Hero): number {
    return hero.id;
  }

}
