import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscriptionChangeFormComponent } from './subscription-change-form.component';

describe('SubscriptionChangeFormComponent', () => {
  let component: SubscriptionChangeFormComponent;
  let fixture: ComponentFixture<SubscriptionChangeFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubscriptionChangeFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubscriptionChangeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
