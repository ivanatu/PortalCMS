import { TestBed } from '@angular/core/testing';

import { DownloadsSectionService } from './downloads-section.service';

describe('DownloadsSectionService', () => {
  let service: DownloadsSectionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DownloadsSectionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
