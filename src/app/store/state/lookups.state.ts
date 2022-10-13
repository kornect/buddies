import { Injectable } from '@angular/core';

import { Action, Selector, State, StateContext } from '@ngxs/store';

import { NHostService } from '@/app/common/nhost';
import { GET_ATTRIBUTE } from '@/app/store/graphql/attributes/queries';
import { AttributeLookup } from '@/app/store/models';
import { BaseState } from '@/app/store/state/base.state';
import { GetLookupsAction } from '@/app/store/state/lookups.actions';

export interface LookupsStateModel {
  genders: Array<AttributeLookup>;
  religions: Array<AttributeLookup>;
  ethnicGroups: Array<AttributeLookup>;
  maritalStatuses: Array<AttributeLookup>;
  sexualities: Array<AttributeLookup>;
}

const defaults = {
  genders: [],
  sexualities: [],
  religions: [],
  ethnicGroups: [],
  maritalStatuses: [],
};

@State<LookupsStateModel>({
  name: 'lookups',
  defaults,
})
@Injectable()
export class LookupsState extends BaseState {
  constructor(private hostService: NHostService) {
    super(hostService);
  }

  @Selector()
  static genders(state: LookupsStateModel) {
    return state.genders;
  }

  @Selector()
  static sexualities(state: LookupsStateModel) {
    return state.sexualities;
  }

  @Selector()
  static religions(state: LookupsStateModel) {
    return state.religions;
  }

  @Selector()
  static ethnicGroups(state: LookupsStateModel) {
    return state.ethnicGroups;
  }

  @Selector()
  static maritalStatuses(state: LookupsStateModel) {
    return state.maritalStatuses;
  }

  @Action(GetLookupsAction)
  getLookupsAction({ setState, getState }: StateContext<LookupsStateModel>) {
    return this.withObservable(async () => {
      const { data, error } = await this.hostService.graphql.request(GET_ATTRIBUTE);
      if (error) {
        throw new Error('Error getting lookups');
      }

      Object.keys(data).forEach((key) => {
        setState({
          ...getState(),
          [key]: data[key],
        });
      });
    });
  }
}
