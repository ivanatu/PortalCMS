import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideosCategoryModalComponent } from './videos-category-modal.component';

describe('VideosCategoryModalComponent', () => {
  let component: VideosCategoryModalComponent;
  let fixture: ComponentFixture<VideosCategoryModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideosCategoryModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VideosCategoryModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
