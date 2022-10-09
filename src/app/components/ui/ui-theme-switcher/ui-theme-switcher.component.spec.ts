import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiThemeSwitcherComponent } from './ui-theme-switcher.component';

describe('UiThemeSwitcherComponent', () => {
  let component: UiThemeSwitcherComponent;
  let fixture: ComponentFixture<UiThemeSwitcherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UiThemeSwitcherComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UiThemeSwitcherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
