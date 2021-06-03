import { TestBed } from '@angular/core/testing';

import { AdditionalAppCategoriesService } from './additional-app-categories.service';

describe('AdditionalAppCategoriesService', () => {
  let service: AdditionalAppCategoriesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdditionalAppCategoriesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
