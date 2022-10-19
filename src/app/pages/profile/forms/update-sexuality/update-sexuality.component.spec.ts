import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateSexualityComponent } from './update-sexuality.component';

describe('UpdateSexualityComponent', () => {
  let component: UpdateSexualityComponent;
  let fixture: ComponentFixture<UpdateSexualityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateSexualityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateSexualityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
