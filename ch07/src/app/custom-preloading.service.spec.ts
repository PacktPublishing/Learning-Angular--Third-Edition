import { TestBed } from '@angular/core/testing';

import { CustomPreloadingService } from './custom-preloading.service';

describe('CustomPreloadingService', () => {
  let service: CustomPreloadingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomPreloadingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
