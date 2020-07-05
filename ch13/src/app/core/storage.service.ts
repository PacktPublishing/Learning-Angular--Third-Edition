import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  get<T>(name: string): T {
    return JSON.parse(localStorage.getItem(name));
  }

  set<T>(name: string, value: T) {
    localStorage.setItem(name, JSON.stringify(value));
  }

}
