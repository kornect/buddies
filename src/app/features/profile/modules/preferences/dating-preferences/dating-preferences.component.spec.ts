import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatingPreferencesComponent } from './dating-preferences.component';

describe('DatingPreferencesComponent', () => {
  let component: DatingPreferencesComponent;
  let fixture: ComponentFixture<DatingPreferencesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatingPreferencesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatingPreferencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
