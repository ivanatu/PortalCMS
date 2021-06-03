import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DownloadsDisplayComponent } from './downloads-display.component';

describe('DownloadsDisplayComponent', () => {
  let component: DownloadsDisplayComponent;
  let fixture: ComponentFixture<DownloadsDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DownloadsDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DownloadsDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
