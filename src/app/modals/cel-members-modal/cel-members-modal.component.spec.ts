import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CelMembersModalComponent } from './cel-members-modal.component';

describe('CelMembersModalComponent', () => {
  let component: CelMembersModalComponent;
  let fixture: ComponentFixture<CelMembersModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CelMembersModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CelMembersModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
