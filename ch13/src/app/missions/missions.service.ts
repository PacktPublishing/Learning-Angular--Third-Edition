import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Hero } from '../core/hero';
import { Mission } from '../core/mission';

@Injectable({
  providedIn: 'root'
})
export class MissionService {

  private missionsUrl;

  constructor(private http: HttpClient) {
    this.missionsUrl = 'api/heroes';
  }

  assignMission(mission: Mission, hero: Hero): Observable<any> {
    if (!hero.missions) {
      hero.missions = [];
    }
    hero.missions.push(mission);

    return this.http.put<Hero>(`${this.missionsUrl}/${hero.id}`, hero);
  }

}
