import { TestBed } from '@angular/core/testing';

import { VideosSubtitlesService } from './videos-subtitles.service';

describe('VideosSubtitlesService', () => {
  let service: VideosSubtitlesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VideosSubtitlesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
