import { Injectable } from '@angular/core';

import * as Apollo from 'apollo-angular';
import { gql } from 'apollo-angular';

import * as Types from '../types';

export type GetLookupsQueryVariables = Types.Exact<{ [key: string]: never }>;

export type GetLookupsQuery = {
  sexuality: Array<{ name: string }>;
  genders: Array<{ name: string }>;
  relationships: Array<{ name: string }>;
};

export const GetLookupsDocument = /*#__PURE__*/ gql`
  query GetLookups {
    sexuality {
      name
    }
    genders {
      name
    }
    relationships {
      name
    }
  }
`;

@Injectable({
  providedIn: 'root',
})
export class GetLookupsGQL extends Apollo.Query<GetLookupsQuery, GetLookupsQueryVariables> {
  override document = GetLookupsDocument;

  constructor(apollo: Apollo.Apollo) {
    super(apollo);
  }
}
