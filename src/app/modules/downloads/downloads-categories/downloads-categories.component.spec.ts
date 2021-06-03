import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DownloadsCategoriesComponent } from './downloads-categories.component';

describe('DownloadsCategoriesComponent', () => {
  let component: DownloadsCategoriesComponent;
  let fixture: ComponentFixture<DownloadsCategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DownloadsCategoriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DownloadsCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
