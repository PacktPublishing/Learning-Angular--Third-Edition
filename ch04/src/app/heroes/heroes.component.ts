import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero.model';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[] = [
    { id: 1, name: 'Iron Man', team: 'avengers' },
    { id: 2, name: 'Thor', team: 'avengers' },
    { id: 3, name: 'Thanos', team: 'villains' },
    { id: 4, name: 'Red Skull', team: 'villains' },
    { id: 5, name: 'Ghost Rider', team: '' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  trackByHeroes(index: number, hero: Hero): number {
    return hero.id;
  }

}
