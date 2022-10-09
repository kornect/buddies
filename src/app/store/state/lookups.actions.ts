export class LookupsAction {
  static readonly type = '[Lookups] Add item';

  constructor(public payload: string) {}
}

// get lookups action
export class GetLookupsAction {
  static readonly type = '[GetLookups] get lookups';
}
