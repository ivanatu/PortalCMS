import { TestBed } from '@angular/core/testing';

import { VideosDisplayService } from './videos-display.service';

describe('VideosDisplayService', () => {
  let service: VideosDisplayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VideosDisplayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
