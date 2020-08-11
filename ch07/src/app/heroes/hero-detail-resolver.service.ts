import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Hero } from './hero.model';
import { HeroService } from './hero.service';
import { take, mergeMap } from 'rxjs/operators';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroDetailResolverService implements Resolve<Hero> {

  constructor(private heroService: HeroService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Hero> {
    const id = +route.paramMap.get('id');

    return this.heroService.getHero(id).pipe(
      take(1),
      mergeMap(hero => of(hero))
    );
  }
}
