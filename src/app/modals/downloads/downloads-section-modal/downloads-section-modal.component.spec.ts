import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DownloadsSectionModalComponent } from './downloads-section-modal.component';

describe('DownloadsSectionModalComponent', () => {
  let component: DownloadsSectionModalComponent;
  let fixture: ComponentFixture<DownloadsSectionModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DownloadsSectionModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DownloadsSectionModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
