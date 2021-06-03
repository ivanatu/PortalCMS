import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DownloadsCategoryModalComponent } from './downloads-category-modal.component';

describe('DownloadsCategoryModalComponent', () => {
  let component: DownloadsCategoryModalComponent;
  let fixture: ComponentFixture<DownloadsCategoryModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DownloadsCategoryModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DownloadsCategoryModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
