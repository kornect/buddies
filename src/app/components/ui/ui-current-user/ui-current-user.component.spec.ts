import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiCurrentUserComponent } from './ui-current-user.component';

describe('UiCurrentUserComponent', () => {
  let component: UiCurrentUserComponent;
  let fixture: ComponentFixture<UiCurrentUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UiCurrentUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UiCurrentUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
