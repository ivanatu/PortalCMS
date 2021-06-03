import { TestBed } from '@angular/core/testing';

import { DownloadsDisplayService } from './downloads-display.service';

describe('DownloadsDisplayService', () => {
  let service: DownloadsDisplayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DownloadsDisplayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
