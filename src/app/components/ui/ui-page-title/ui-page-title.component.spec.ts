import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiPageTitleComponent } from './ui-page-title.component';

describe('UiPageTitleComponent', () => {
  let component: UiPageTitleComponent;
  let fixture: ComponentFixture<UiPageTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UiPageTitleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UiPageTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
