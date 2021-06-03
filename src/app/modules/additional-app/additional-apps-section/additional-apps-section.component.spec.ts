import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdditionalAppsSectionComponent } from './additional-apps-section.component';

describe('AdditionalAppsSectionComponent', () => {
  let component: AdditionalAppsSectionComponent;
  let fixture: ComponentFixture<AdditionalAppsSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdditionalAppsSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdditionalAppsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
