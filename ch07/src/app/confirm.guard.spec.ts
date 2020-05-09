import { TestBed } from '@angular/core/testing';

import { ConfirmGuard } from './confirm.guard';

describe('ConfirmGuard', () => {
  let guard: ConfirmGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ConfirmGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
