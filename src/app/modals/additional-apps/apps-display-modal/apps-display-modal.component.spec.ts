import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppsDisplayModalComponent } from './apps-display-modal.component';

describe('AppsDisplayModalComponent', () => {
  let component: AppsDisplayModalComponent;
  let fixture: ComponentFixture<AppsDisplayModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppsDisplayModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppsDisplayModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
