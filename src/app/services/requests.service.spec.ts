import { TestBed } from '@angular/core/testing';

import { RequestsService } from './requests.service';

describe('MapService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RequestsService = TestBed.get(RequestsService);
    expect(service).toBeTruthy();
  });
});
