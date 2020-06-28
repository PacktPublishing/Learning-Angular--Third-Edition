import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'

import { DataService } from './data.service';

describe('DataService', () => {
  let service: DataService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(DataService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get heroes', () => {
    const heroes = ['Boothstomper', 'Drogfisher'];
    service.getHeroes().subscribe(heroes => expect(heroes.length).toBe(2));
    const req = httpTestingController.expectOne('api/heroes');
    expect(req.request.method).toEqual('GET');
    req.flush(heroes);
  });

  it('should add a hero', () => {
    service.addHero('Bloodyllips').subscribe();
    const req = httpTestingController.expectOne('api/heroes');
    expect(req.request.method).toEqual('POST');
    expect(req.request.body).toEqual({hero: 'Bloodyllips'})
    req.flush('');
  });
});
