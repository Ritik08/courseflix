import { TestBed } from '@angular/core/testing';

import { ValidateUserGuard } from './validate-user.guard';

describe('ValidateUserGuard', () => {
  let guard: ValidateUserGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ValidateUserGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
