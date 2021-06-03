import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManualsCategoryModalComponent } from './manuals-category-modal.component';

describe('ManualsCategoryModalComponent', () => {
  let component: ManualsCategoryModalComponent;
  let fixture: ComponentFixture<ManualsCategoryModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManualsCategoryModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManualsCategoryModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
