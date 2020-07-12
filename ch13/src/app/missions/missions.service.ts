import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';

import { Hero } from '../core/hero';
import { Mission } from '../core/mission';

@Injectable({
  providedIn: 'root'
})
export class MissionService {

  private missionAddedSource = new Subject<Mission>();
  readonly missionAdded$ = this.missionAddedSource.asObservable();

  private missionsUrl;

  constructor(private http: HttpClient) {
    this.missionsUrl = 'api/heroes';
  }

  assignMission(mission: Mission, hero: Hero): Observable<any> {
    if (!hero.missions) {
      hero.missions = [];
    }
    hero.missions.push(mission);

    return this.http.put<Hero>(`${this.missionsUrl}/${hero.id}`, hero).pipe(
      map(() => this.missionAddedSource.next(mission))
    );
  }

  completeMission(mission: Mission, hero: Hero): Observable<any> {
    hero.missions = hero.missions.filter(m => m !== mission);
    return this.http.put<Hero>(`${this.missionsUrl}/${hero.id}`, hero);
  }

}
