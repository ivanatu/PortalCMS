import { TestBed } from '@angular/core/testing';

import { ManualSectionService } from './manual-section.service';

describe('ManualSectionService', () => {
  let service: ManualSectionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManualSectionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
