import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiPasswordStrengthComponent } from './ui-password-strength.component';

describe('UiPasswordStrengthComponent', () => {
  let component: UiPasswordStrengthComponent;
  let fixture: ComponentFixture<UiPasswordStrengthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UiPasswordStrengthComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UiPasswordStrengthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
