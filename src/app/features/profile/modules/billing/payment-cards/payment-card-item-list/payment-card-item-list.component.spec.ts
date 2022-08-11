import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentCardItemListComponent } from './payment-card-item-list.component';

describe('PaymentCardItemListComponent', () => {
  let component: PaymentCardItemListComponent;
  let fixture: ComponentFixture<PaymentCardItemListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentCardItemListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentCardItemListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
