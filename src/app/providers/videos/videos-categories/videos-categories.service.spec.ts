import { TestBed } from '@angular/core/testing';

import { VideosCategoriesService } from './videos-categories.service';

describe('VideosCategoriesService', () => {
  let service: VideosCategoriesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VideosCategoriesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
