import { Component, OnInit } from '@angular/core';

interface Hero {
  id: number;
  name: string;
  team: string;
}

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
