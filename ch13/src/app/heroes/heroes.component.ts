import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';

import { Hero } from '../core/hero';
import { HeroService } from './heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[];
  selectedHero: Hero;

  @ViewChild(MatDrawer) private drawer: MatDrawer;

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  onHeroDeleted() {
    this.getHeroes();
    this.drawer.close();
  }

  selectHero(hero: Hero) {
    this.selectedHero = hero;
    this.drawer.open();
  }

  private getHeroes() {
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }

}
