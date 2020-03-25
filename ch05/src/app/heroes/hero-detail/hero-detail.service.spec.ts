import { TestBed } from '@angular/core/testing';

import { HeroDetailService } from './hero-detail.service';

describe('HeroDetailService', () => {
  let service: HeroDetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HeroDetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
