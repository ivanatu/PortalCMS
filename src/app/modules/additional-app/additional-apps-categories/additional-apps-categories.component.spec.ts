import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdditionalAppsCategoriesComponent } from './additional-apps-categories.component';

describe('AdditionalAppsCategoriesComponent', () => {
  let component: AdditionalAppsCategoriesComponent;
  let fixture: ComponentFixture<AdditionalAppsCategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdditionalAppsCategoriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdditionalAppsCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
