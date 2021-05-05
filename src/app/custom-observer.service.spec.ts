import { TestBed } from '@angular/core/testing';

import { CustomObserverService } from './custom-observer.service';

describe('CustomObserverService', () => {
  let service: CustomObserverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomObserverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
