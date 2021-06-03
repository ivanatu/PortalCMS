import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdditionalAppsDisplayComponent } from './additional-apps-display.component';

describe('AdditionalAppsDisplayComponent', () => {
  let component: AdditionalAppsDisplayComponent;
  let fixture: ComponentFixture<AdditionalAppsDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdditionalAppsDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdditionalAppsDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
