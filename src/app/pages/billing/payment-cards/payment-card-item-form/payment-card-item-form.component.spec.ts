import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentCardItemFormComponent } from './payment-card-item-form.component';

describe('PaymentCardItemFormComponent', () => {
  let component: PaymentCardItemFormComponent;
  let fixture: ComponentFixture<PaymentCardItemFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentCardItemFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentCardItemFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
