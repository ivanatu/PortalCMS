import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManualsSectionModalComponent } from './manuals-section-modal.component';

describe('ManualsSectionModalComponent', () => {
  let component: ManualsSectionModalComponent;
  let fixture: ComponentFixture<ManualsSectionModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManualsSectionModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManualsSectionModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
