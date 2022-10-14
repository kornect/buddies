import { Injectable } from '@angular/core';

import * as Apollo from 'apollo-angular';
import { gql } from 'apollo-angular';

import * as Types from '../types';

export type GetPhotosQueryVariables = Types.Exact<{
  userId: Types.Uuid_Comparison_Exp;
}>;

export type GetPhotosQuery = { files: Array<{ id: any; mimeType: string | null; name: string | null }> };

export const GetPhotosDocument = /*#__PURE__*/ gql`
  query GetPhotos($userId: uuid_comparison_exp!) {
    files(where: { uploadedByUserId: $userId }) {
      id
      mimeType
      name
    }
  }
`;

@Injectable({
  providedIn: 'root',
})
export class GetPhotosGQL extends Apollo.Query<GetPhotosQuery, GetPhotosQueryVariables> {
  override document = GetPhotosDocument;

  constructor(apollo: Apollo.Apollo) {
    super(apollo);
  }
}
