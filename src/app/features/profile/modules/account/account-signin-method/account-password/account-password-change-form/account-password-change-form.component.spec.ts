import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountPasswordChangeFormComponent } from './account-password-change-form.component';

describe('AccountPasswordChangeFormComponent', () => {
  let component: AccountPasswordChangeFormComponent;
  let fixture: ComponentFixture<AccountPasswordChangeFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountPasswordChangeFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountPasswordChangeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
