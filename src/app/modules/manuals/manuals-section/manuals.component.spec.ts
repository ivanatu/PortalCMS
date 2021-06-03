import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ManualsComponent } from './manuals.component';

describe('ManualsComponent', () => {
  let component: ManualsComponent;
  let fixture: ComponentFixture<ManualsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ManualsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManualsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
