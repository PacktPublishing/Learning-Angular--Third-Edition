import { TestBed } from '@angular/core/testing';

import { HeroDetailResolverService } from './hero-detail-resolver.service';

describe('HeroDetailResolverService', () => {
  let service: HeroDetailResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HeroDetailResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
