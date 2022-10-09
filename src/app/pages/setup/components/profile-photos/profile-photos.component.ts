import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { NzMessageService } from 'ng-zorro-antd/message';
import { ImageCroppedEvent } from 'ngx-image-cropper';
import { Observable, switchMap, tap } from 'rxjs';
import { BaseFormComponent } from 'shared/ui/ui-forms';

import { base64ToFile, uniqueID } from 'core/../../../../../../../buddies/src/app/utils';

import { PhotosService } from 'domain/services/photos';
import { UserService } from 'domain/services/user';


@Component({
  selector: 'app-profile-photos',
  templateUrl: './profile-photos.component.html',
  styleUrls: ['./profile-photos.component.scss'],
})
export class ProfilePhotosComponent extends BaseFormComponent implements OnInit {
  @Output() onSaved = new EventEmitter();

  optionalValues = false;
  imageChangedEvent: any = '';
  croppedImage: any = '';
  showCropper = false;
  loadingImage = false;

  constructor(
    private formBuilder: FormBuilder,
    private message: NzMessageService,
    private userService: UserService,
    private photosService: PhotosService
  ) {
    super();
    this.form = this.formBuilder.group({
      photo: [null, [Validators.required]],
      cropped: [null, [Validators.required]],
    });
  }

  ngOnInit(): void {}

  Save(formValues: any): Observable<any> {
    return this.photosService.uploadPhoto(formValues.cropped).pipe(
      switchMap((photo) => this.userService.updateAvatar(photo)),
      tap(() => {
        this.onSaved.emit();
      })
    );
  }

  fileChangeEvent(event: any): void {
    this.imageChangedEvent = event;
  }

  imageCropped(event: ImageCroppedEvent) {
    if (event.base64) {
      const id = uniqueID();
      const file = base64ToFile(event.base64, `${id}.jpg`);
      this.form.patchValue({
        cropped: file,
      });
    }
  }

  imageLoaded() {
    // show cropper
  }

  cropperReady() {
    this.showCropper = true;
    this.loadingImage = false;
    // cropper ready
  }

  loadImageFailed() {
    // show message
  }
}
