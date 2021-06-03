import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CelMembersComponent } from './cel-members.component';

describe('CelMembersComponent', () => {
  let component: CelMembersComponent;
  let fixture: ComponentFixture<CelMembersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CelMembersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CelMembersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
