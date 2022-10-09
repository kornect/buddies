import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountEmailChangeFormComponent } from './account-email-change-form.component';

describe('AccountEmailChangeFormComponent', () => {
  let component: AccountEmailChangeFormComponent;
  let fixture: ComponentFixture<AccountEmailChangeFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountEmailChangeFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountEmailChangeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
