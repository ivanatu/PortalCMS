import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManualsDisplayModalComponent } from './manuals-display-modal.component';

describe('ManualsDisplayModalComponent', () => {
  let component: ManualsDisplayModalComponent;
  let fixture: ComponentFixture<ManualsDisplayModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManualsDisplayModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManualsDisplayModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
