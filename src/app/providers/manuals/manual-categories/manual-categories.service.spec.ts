import { TestBed } from '@angular/core/testing';

import { ManualCategoriesService } from './manual-categories.service';

describe('ManualCategoriesService', () => {
  let service: ManualCategoriesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManualCategoriesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
