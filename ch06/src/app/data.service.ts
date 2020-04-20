import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class DataService implements InMemoryDbService {

  constructor() { }

  createDb() {
    return {
      heroes: [
        { id: 1, name: 'Boothstomper' },
        { id: 2, name: 'Drogfisher' },
        { id: 3, name: 'Bloodyllips' },
        { id: 4, name: 'Mr Bu Moverse' },
        { id: 5, name: 'Piranhaelli' }
      ]
    };
  }
}
