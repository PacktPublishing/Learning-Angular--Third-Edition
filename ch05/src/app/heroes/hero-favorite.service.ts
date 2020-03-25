import { Injectable } from '@angular/core';
import { HeroService } from './hero.service';
import { Hero } from './hero.model';

@Injectable({
  providedIn: 'root'
})
export class HeroFavoriteService extends HeroService {

  constructor() {
    super();
  }

  getHeroes(): Hero[] {
    return super.getHeroes().slice(0, 3);
  }
}
