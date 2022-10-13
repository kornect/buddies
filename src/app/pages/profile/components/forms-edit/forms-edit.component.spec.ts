import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsEditComponent } from './forms-edit.component';

describe('FormsEditComponent', () => {
  let component: FormsEditComponent;
  let fixture: ComponentFixture<FormsEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormsEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
