import { Injectable } from '@angular/core';
import { State, Action, StateContext } from '@ngxs/store';
import { LookupsAction } from './lookups.actions';

export class LookupsStateModel {
  public items: string[];
}

const defaults = {
  items: []
};

@State<LookupsStateModel>({
  name: 'lookups',
  defaults
})
@Injectable()
export class LookupsState {
  @Action(LookupsAction)
  add({ getState, setState }: StateContext<LookupsStateModel>, { payload }: LookupsAction) {
    const state = getState();
    setState({ items: [ ...state.items, payload ] });
  }
}
