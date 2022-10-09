import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiInputErrorComponent } from './ui-input-error.component';

describe('UiInputErrorComponent', () => {
  let component: UiInputErrorComponent;
  let fixture: ComponentFixture<UiInputErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UiInputErrorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UiInputErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
