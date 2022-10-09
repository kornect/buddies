import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountSigninMethodComponent } from './account-signin-method.component';

describe('AccountSigninMethodComponent', () => {
  let component: AccountSigninMethodComponent;
  let fixture: ComponentFixture<AccountSigninMethodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountSigninMethodComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountSigninMethodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
