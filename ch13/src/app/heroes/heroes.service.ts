import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Hero } from '../core/hero';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  private heroesUrl;

  constructor(private http: HttpClient) {
    this.heroesUrl = 'api/heroes';
  }

  createHero(hero: Hero): Observable<any> {
    return this.http.post<Hero>(this.heroesUrl, hero);
  }

  deleteHero(id: string): Observable<any> {
    return this.http.delete(`${this.heroesUrl}/${id}`);
  }

  getHero(id: string): Observable<Hero> {
    return this.http.get<Hero>(`${this.heroesUrl}/${id}`);
  }

  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.heroesUrl);
  }

}
