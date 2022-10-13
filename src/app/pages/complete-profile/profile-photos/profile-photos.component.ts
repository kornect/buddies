import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UntypedFormBuilder, Validators } from '@angular/forms';

import { Store } from '@ngxs/store';
import { NzMessageService } from 'ng-zorro-antd/message';
import { ImageCroppedEvent } from 'ngx-image-cropper';
import { Observable, tap } from 'rxjs';

import { BaseFormComponent } from '@/app/common/forms';
import { UploadAvatarAction } from '@/app/store/state';
import { base64ToFile, uniqueID } from '@/app/utils';


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

  constructor(private formBuilder: UntypedFormBuilder, private message: NzMessageService, private store: Store) {
    super();
    this.form = this.formBuilder.group({
      photo: [null, [Validators.required]],
      cropped: [null, [Validators.required]],
    });
  }

  ngOnInit(): void {}

  Save(formValues: any): Observable<any> {
    return this.store
      .dispatch(
        new UploadAvatarAction({
          file: formValues.cropped,
        })
      )
      .pipe(
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
