import { Injectable } from '@angular/core';

import * as Apollo from 'apollo-angular';
import { gql } from 'apollo-angular';

import * as Types from '../types';

export type GetUserQueryVariables = Types.Exact<{
  id: Types.Scalars['uuid'];
}>;

export type GetUserQuery = {
  user: {
    updatedAt: any;
    phoneNumberVerified: boolean;
    phoneNumber: string | null;
    newEmail: any | null;
    lastSeen: any | null;
    emailVerified: boolean;
    email: any | null;
    displayName: string;
    createdAt: any;
    avatarUrl: string;
    activeMfaType: string | null;
    defaultRole: string;
    disabled: boolean;
    id: any;
  } | null;
};

export type UpdateUserDisplayNameMutationVariables = Types.Exact<{
  id?: Types.InputMaybe<Types.Scalars['uuid']>;
  displayName?: Types.InputMaybe<Types.Scalars['String']>;
}>;

export type UpdateUserDisplayNameMutation = { updateUser: { displayName: string } | null };

export type UpdateUserAvatarUrlMutationVariables = Types.Exact<{
  id?: Types.InputMaybe<Types.Scalars['uuid']>;
  avatarUrl?: Types.InputMaybe<Types.Scalars['String']>;
}>;

export type UpdateUserAvatarUrlMutation = { updateUser: { avatarUrl: string } | null };

export const GetUserDocument = /*#__PURE__*/ gql`
  query GetUser($id: uuid!) {
    user(id: $id) {
      updatedAt
      phoneNumberVerified
      phoneNumber
      newEmail
      lastSeen
      emailVerified
      email
      displayName
      createdAt
      avatarUrl
      activeMfaType
      defaultRole
      disabled
      id
    }
  }
`;

@Injectable({
  providedIn: 'root',
})
export class GetUserGQL extends Apollo.Query<GetUserQuery, GetUserQueryVariables> {
  override document = GetUserDocument;

  constructor(apollo: Apollo.Apollo) {
    super(apollo);
  }
}
export const UpdateUserDisplayNameDocument = /*#__PURE__*/ gql`
  mutation UpdateUserDisplayName($id: uuid = "", $displayName: String = "") {
    updateUser(pk_columns: { id: $id }, _set: { displayName: $displayName }) {
      displayName
    }
  }
`;

@Injectable({
  providedIn: 'root',
})
export class UpdateUserDisplayNameGQL extends Apollo.Mutation<
  UpdateUserDisplayNameMutation,
  UpdateUserDisplayNameMutationVariables
> {
  override document = UpdateUserDisplayNameDocument;

  constructor(apollo: Apollo.Apollo) {
    super(apollo);
  }
}
export const UpdateUserAvatarUrlDocument = /*#__PURE__*/ gql`
  mutation UpdateUserAvatarUrl($id: uuid = "", $avatarUrl: String = "") {
    updateUser(pk_columns: { id: $id }, _set: { avatarUrl: $avatarUrl }) {
      avatarUrl
    }
  }
`;

@Injectable({
  providedIn: 'root',
})
export class UpdateUserAvatarUrlGQL extends Apollo.Mutation<
  UpdateUserAvatarUrlMutation,
  UpdateUserAvatarUrlMutationVariables
> {
  override document = UpdateUserAvatarUrlDocument;

  constructor(apollo: Apollo.Apollo) {
    super(apollo);
  }
}
