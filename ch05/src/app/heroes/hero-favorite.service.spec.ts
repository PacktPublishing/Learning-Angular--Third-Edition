import { TestBed } from '@angular/core/testing';

import { HeroFavoriteService } from './hero-favorite.service';

describe('HeroFavoriteService', () => {
  let service: HeroFavoriteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HeroFavoriteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
