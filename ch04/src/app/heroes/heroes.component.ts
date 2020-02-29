import { Component, OnInit } from '@angular/core';

interface Hero {
  id: number;
  name: string;
}

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[] = [
    { id: 1, name: 'Iron Man' },
    { id: 2, name: 'Spider Man' },
    { id: 3, name: 'Thor' },
    { id: 4, name: 'Hulk' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  trackByHeroes(index: number, hero: Hero): number {
    return hero.id;
  }

}
