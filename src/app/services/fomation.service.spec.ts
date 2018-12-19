import { TestBed } from '@angular/core/testing';

import { FomationService } from './fomation.service';

describe('FomationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FomationService = TestBed.get(FomationService);
    expect(service).toBeTruthy();
  });
});
