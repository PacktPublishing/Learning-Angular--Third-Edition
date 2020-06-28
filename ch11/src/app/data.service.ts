import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getHeroes(): Observable<string[]> {
    return this.http.get<string[]>('api/heroes');
  }

  addHero(name: string) {
    return this.http.post<string>('api/heroes', {hero: name});
  }

}
