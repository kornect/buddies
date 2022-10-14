import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateRelationshipPreferenceComponent } from './update-relationship-preference.component';

describe('UpdateRelationshipPreferenceComponent', () => {
  let component: UpdateRelationshipPreferenceComponent;
  let fixture: ComponentFixture<UpdateRelationshipPreferenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateRelationshipPreferenceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateRelationshipPreferenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
