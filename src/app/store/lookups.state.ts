import { Injectable } from '@angular/core';

import { Action, Selector, State, StateContext } from '@ngxs/store';
import { tap } from 'rxjs';

import { NhostService } from '@/app/common/nhost';
import { GetLookupsGQL } from '@/app/graphql/lookups/lookups.generated';
import { Lookup } from '@/app/store/models';
import { BaseState } from '@/app/store/base.state';
import { GetLookupsAction } from '@/app/store/lookups.actions';

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
  constructor(private hostService: NhostService, private getLookupsGQL: GetLookupsGQL) {
    super(hostService);
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

  @Action(GetLookupsAction)
  getLookupsAction({ setState }: StateContext<LookupsStateModel>) {
    return this.getLookupsGQL.fetch().pipe(
      tap(({ data, error }) => {
        if (error) {
          throw this.getGraphQLError(error);
        }

        setState({
          genders: data.genders.map((value) => ({ value: value.name, text: value.name } as unknown as Lookup)),
          sexuality: data.sexuality.map((value) => ({ value: value.name, text: value.name } as unknown as Lookup)),
          relationships: data.relationships.map(
            (value) =>
              ({
                value: value.name,
                text: value.name
              } as unknown as Lookup)
          )
        });
      })
    );
  }
}
