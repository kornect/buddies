import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotosItemListComponent } from './photos-item-list.component';

describe('PhotosItemListComponent', () => {
  let component: PhotosItemListComponent;
  let fixture: ComponentFixture<PhotosItemListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhotosItemListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotosItemListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
