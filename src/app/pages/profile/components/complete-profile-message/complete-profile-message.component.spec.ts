import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompleteProfileMessageComponent } from './complete-profile-message.component';

describe('CompleteProfileMessageComponent', () => {
  let component: CompleteProfileMessageComponent;
  let fixture: ComponentFixture<CompleteProfileMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompleteProfileMessageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompleteProfileMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
