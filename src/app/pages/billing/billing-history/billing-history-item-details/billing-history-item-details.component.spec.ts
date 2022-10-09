import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BillingHistoryItemDetailsComponent } from './billing-history-item-details.component';

describe('BillingHistoryItemDetailsComponent', () => {
  let component: BillingHistoryItemDetailsComponent;
  let fixture: ComponentFixture<BillingHistoryItemDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BillingHistoryItemDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BillingHistoryItemDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
