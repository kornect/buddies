import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PhotosRoutingModule } from './photos-routing.module';
import { PhotosComponent } from './photos.component';
import { UploadPhotoFormComponent } from './upload-photo-form/upload-photo-form.component';
import { PhotosItemListComponent } from './photos-item-list/photos-item-list.component';


@NgModule({
  declarations: [
    PhotosComponent,
    UploadPhotoFormComponent,
    PhotosItemListComponent
  ],
  imports: [
    CommonModule,
    PhotosRoutingModule
  ]
})
export class PhotosModule { }
