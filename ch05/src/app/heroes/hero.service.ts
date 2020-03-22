import { Injectable } from '@angular/core';
import { Hero } from './hero.model';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }

  getHeroes(): Hero[] {
    return [
      { id: 1, name: 'Boothstomper' },
      { id: 2, name: 'Drogfisher' },
      { id: 3, name: 'Bloodyllips' },
      { id: 4, name: 'Mr Bu Moverse' },
      { id: 5, name: 'Piranhaelli' }
    ];
  }
}
