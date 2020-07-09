import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { Observable } from 'rxjs';

import { Hero } from './hero';
import { HeroService } from './heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes$: Observable<Hero[]>;
  selectedHeroId: string;

  @ViewChild(MatDrawer) private drawer: MatDrawer;

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.heroes$ = this.heroService.getHeroes();
  }

  selectHero(heroId: string) {
    this.selectedHeroId = heroId;
    this.drawer.open();
  }

}
