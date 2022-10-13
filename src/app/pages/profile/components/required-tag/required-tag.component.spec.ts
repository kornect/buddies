import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequiredTagComponent } from './required-tag.component';

describe('RequiredTagComponent', () => {
  let component: RequiredTagComponent;
  let fixture: ComponentFixture<RequiredTagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequiredTagComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RequiredTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
