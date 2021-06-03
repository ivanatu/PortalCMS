import { TestBed } from '@angular/core/testing';

import { DownloadsCategoriesService } from './downloads-categories.service';

describe('DownloadsCategoriesService', () => {
  let service: DownloadsCategoriesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DownloadsCategoriesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
