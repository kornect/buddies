import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BillingHistoryItemComponent } from './billing-history-item.component';

describe('BillingHistoryItemComponent', () => {
  let component: BillingHistoryItemComponent;
  let fixture: ComponentFixture<BillingHistoryItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BillingHistoryItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BillingHistoryItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
