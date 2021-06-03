import { TestBed } from '@angular/core/testing';

import { ManualFilesService } from './manual-files.service';

describe('ManualFilesService', () => {
  let service: ManualFilesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManualFilesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
