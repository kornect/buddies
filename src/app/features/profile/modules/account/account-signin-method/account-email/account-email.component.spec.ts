import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountEmailComponent } from './account-email.component';

describe('AccountEmailComponent', () => {
  let component: AccountEmailComponent;
  let fixture: ComponentFixture<AccountEmailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountEmailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
