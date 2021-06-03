import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppsSectionModalComponent } from './apps-section-modal.component';

describe('AppsSectionModalComponent', () => {
  let component: AppsSectionModalComponent;
  let fixture: ComponentFixture<AppsSectionModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppsSectionModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppsSectionModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
