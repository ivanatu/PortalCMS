import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideosModalComponent } from './videos-modal.component';

describe('VideosModalComponent', () => {
  let component: VideosModalComponent;
  let fixture: ComponentFixture<VideosModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideosModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VideosModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
