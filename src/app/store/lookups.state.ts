import { Injectable } from '@angular/core';

import { Selector, State } from '@ngxs/store';
import { Lookup } from '@/app/store/models';
import { BaseState } from '@/app/store/base.state';
import { AuthService } from '@/app/auth';

export interface LookupsStateModel {
  genders: Array<Lookup>;
  relationships: Array<Lookup>;
  sexuality: Array<Lookup>;
}

const defaults = {
  genders: [],
  sexuality: [],
  relationships: []
};

@State<LookupsStateModel>({
  name: 'lookups',
  defaults
})
@Injectable()
export class LookupsState extends BaseState {
  constructor(private authService: AuthService) {
    super();
  }

  @Selector()
  static genders(state: LookupsStateModel) {
    return state.genders;
  }

  @Selector()
  static sexuality(state: LookupsStateModel) {
    return state.sexuality;
  }

  @Selector()
  static relationships(state: LookupsStateModel) {
    return state.relationships;
  }
}
