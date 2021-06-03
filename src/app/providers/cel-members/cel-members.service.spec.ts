import { TestBed } from '@angular/core/testing';

import { CelMembersService } from './cel-members.service';

describe('CelMembersService', () => {
  let service: CelMembersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CelMembersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
