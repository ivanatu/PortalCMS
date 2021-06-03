import { TestBed } from '@angular/core/testing';

import { AdditionalAppsDisplayService } from './additional-apps-display.service';

describe('AdditionalAppsDisplayService', () => {
  let service: AdditionalAppsDisplayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdditionalAppsDisplayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
