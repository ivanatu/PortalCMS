import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguagesModalComponent } from './languages-modal.component';

describe('LanguagesModalComponent', () => {
  let component: LanguagesModalComponent;
  let fixture: ComponentFixture<LanguagesModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LanguagesModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LanguagesModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
