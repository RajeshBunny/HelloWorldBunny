import { TestBed } from '@angular/core/testing';

import { AsideGuard } from './aside.guard';

describe('AsideGuard', () => {
  let guard: AsideGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AsideGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
