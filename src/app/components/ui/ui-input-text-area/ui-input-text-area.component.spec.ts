import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiInputTextAreaComponent } from './ui-input-text-area.component';

describe('UiInputTextComponent', () => {
  let component: UiInputTextAreaComponent;
  let fixture: ComponentFixture<UiInputTextAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UiInputTextAreaComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UiInputTextAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
