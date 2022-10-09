import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentCardItemComponent } from './payment-card-item.component';

describe('PaymentCardItemComponent', () => {
  let component: PaymentCardItemComponent;
  let fixture: ComponentFixture<PaymentCardItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentCardItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentCardItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
