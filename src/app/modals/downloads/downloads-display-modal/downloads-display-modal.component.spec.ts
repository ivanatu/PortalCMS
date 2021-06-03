import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DownloadsDisplayModalComponent } from './downloads-display-modal.component';

describe('DownloadsDisplayModalComponent', () => {
  let component: DownloadsDisplayModalComponent;
  let fixture: ComponentFixture<DownloadsDisplayModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DownloadsDisplayModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DownloadsDisplayModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
