import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubtitlesModalComponent } from './subtitles-modal.component';

describe('SubtitlesModalComponent', () => {
  let component: SubtitlesModalComponent;
  let fixture: ComponentFixture<SubtitlesModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubtitlesModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubtitlesModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
