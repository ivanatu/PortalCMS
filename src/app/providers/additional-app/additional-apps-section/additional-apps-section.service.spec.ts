import { TestBed } from '@angular/core/testing';

import { AdditionalAppsSectionService } from './additional-apps-section.service';

describe('AdditionalAppsSectionService', () => {
  let service: AdditionalAppsSectionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdditionalAppsSectionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
