import { TestBed, async } from '@angular/core/testing';

import { NgxsModule, Store } from '@ngxs/store';

import { UserState } from './user.state';

describe('Session actions', () => {
  let store: Store;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [NgxsModule.forRoot([UserState])],
    }).compileComponents();
    store = TestBed.get(Store);
  }));
});
