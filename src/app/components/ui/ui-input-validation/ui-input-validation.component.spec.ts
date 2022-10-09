import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiInputValidation } from './ui-input-validation.component';

describe('ValidationsComponent', () => {
  let component: UiInputValidation;
  let fixture: ComponentFixture<UiInputValidation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UiInputValidation],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UiInputValidation);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
