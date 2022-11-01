import { Component, OnInit } from '@angular/core';
import { BaseFormComponent } from '@/app/common/forms';
import { UntypedFormBuilder, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Store } from '@ngxs/store';
import { Location } from '@angular/common';
import { ProfileState, UpdateProfileBioAction } from '@/app/store';
import { Observable, tap } from 'rxjs';

@Component({
  selector: 'app-update-bio',
  templateUrl: './update-bio.component.html',
  styleUrls: ['./update-bio.component.scss']
})
export class UpdateBioComponent extends BaseFormComponent implements OnInit {
  constructor(
    private formBuilder: UntypedFormBuilder,
    private message: NzMessageService,
    private store: Store,
    private location: Location
  ) {
    super();
    this.form = this.formBuilder.group({
      bio: [null, [Validators.required]]
    });
  }

  ngOnInit(): void {
    const profile = this.store.selectSnapshot(ProfileState.profile);

    this.form.patchValue({
      bio: profile?.bio
    });
  }

  Save(formValues: any): Observable<any> {
    return this.store.dispatch(new UpdateProfileBioAction(formValues)).pipe(
      tap(() => {
        this.location.back();
        this.message.success('Profile updated');
      })
    );
  }

  Cancel() {
    this.location.back();
  }
}
