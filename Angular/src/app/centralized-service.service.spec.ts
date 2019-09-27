import { TestBed } from '@angular/core/testing';

import { CentralizedServiceService } from './centralized-service.service';

describe('CentralizedServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CentralizedServiceService = TestBed.get(CentralizedServiceService);
    expect(service).toBeTruthy();
  });
});
