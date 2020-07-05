import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo, STATUS } from 'angular-in-memory-web-api';

import { Hero } from './hero';
import { StorageService } from './storage.service';

// Pseudo guid generator
function guid() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
    s4() + '-' + s4() + s4() + s4();
}

@Injectable({
  providedIn: 'root'
})
export class DataService implements InMemoryDbService {

  constructor(private storageService: StorageService) { }

  createDb() {
    this.storageService.set('heroes', []);

    return {}
  }

  post(reqInfo: RequestInfo) {
    switch(reqInfo.collectionName) {
      case 'heroes':
        this.createHero(reqInfo.utils.getJsonBody(reqInfo.req));
        break;
    }

    return reqInfo.utils.createResponse$(() => {
      return { status: STATUS.OK }
    });
  }

  put(reqInfo: RequestInfo) {
    switch(reqInfo.collectionName) {
      case 'heroes':
        this.updateHero(reqInfo.id, reqInfo.utils.getJsonBody(reqInfo.req));
        break;
    }

    return reqInfo.utils.createResponse$(() => {
      return { status: STATUS.OK }
    });
  }

  delete(reqInfo: RequestInfo) {
    this.deleteHero(reqInfo.id);

    return reqInfo.utils.createResponse$(() => {
      return { status: STATUS.OK }
    });
  }

  private createHero(hero: Hero) {
    const heroes = this.storageService.get<Hero[]>('heroes');
    hero.id = guid();
    this.storageService.set<Hero[]>('heroes', [...heroes, hero]);
  }

  private updateHero(id: string, hero: Hero) {
    const heroes = this.storageService.get<Hero[]>('heroes');
    const index = heroes.findIndex(item => item.id === id);
    heroes[index] = hero;
    this.storageService.set<Hero[]>('heroes', heroes);
  }

  private deleteHero(id: string) {
    const heroes = this.storageService.get<Hero[]>('heroes');
    this.storageService.set<Hero[]>('heroes', heroes.filter(hero => hero.id !== id));
  }
}
