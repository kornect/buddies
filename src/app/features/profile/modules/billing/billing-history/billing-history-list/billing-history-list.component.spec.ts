import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BillingHistoryListComponent } from './billing-history-list.component';

describe('BillingHistoryListComponent', () => {
  let component: BillingHistoryListComponent;
  let fixture: ComponentFixture<BillingHistoryListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BillingHistoryListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BillingHistoryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
