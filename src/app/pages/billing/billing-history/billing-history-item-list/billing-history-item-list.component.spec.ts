import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BillingHistoryItemListComponent } from './billing-history-item-list.component';

describe('BillingHistoryItemListComponent', () => {
  let component: BillingHistoryItemListComponent;
  let fixture: ComponentFixture<BillingHistoryItemListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BillingHistoryItemListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BillingHistoryItemListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
