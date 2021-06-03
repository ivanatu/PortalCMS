import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppsCategoryModalComponent } from './apps-category-modal.component';

describe('AppsCategoryModalComponent', () => {
  let component: AppsCategoryModalComponent;
  let fixture: ComponentFixture<AppsCategoryModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppsCategoryModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppsCategoryModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
