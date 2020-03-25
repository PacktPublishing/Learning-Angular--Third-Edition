import { Injectable } from '@angular/core';
import { Hero } from '../hero.model';
import { HeroService } from '../hero.service';

@Injectable()
export class HeroDetailService {

  private hero: Hero;

  constructor(private heroService: HeroService) { }

  getHero(id: number): Hero {
    const heroes = this.heroService.getHeroes();
    if (!this.hero) {
      this.hero = heroes.find(hero => hero.id === id);
    }
    return this.hero;
  }
}
