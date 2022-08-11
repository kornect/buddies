import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiStickyNavComponent } from './ui-sticky-nav.component';

describe('UiStickyNavComponent', () => {
  let component: UiStickyNavComponent;
  let fixture: ComponentFixture<UiStickyNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UiStickyNavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UiStickyNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
