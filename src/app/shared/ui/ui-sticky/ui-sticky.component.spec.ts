import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiStickyComponent } from './ui-sticky.component';

describe('UiStickyComponent', () => {
  let component: UiStickyComponent;
  let fixture: ComponentFixture<UiStickyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UiStickyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UiStickyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
