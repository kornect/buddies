import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentCardItemDetailsComponent } from './payment-card-item-details.component';

describe('PaymentCardItemDetailsComponent', () => {
  let component: PaymentCardItemDetailsComponent;
  let fixture: ComponentFixture<PaymentCardItemDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentCardItemDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentCardItemDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
