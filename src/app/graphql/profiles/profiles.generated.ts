import * as Types from '../types';

import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type GetProfileQueryVariables = Types.Exact<{
  id: Types.Scalars['uuid'];
}>;


export type GetProfileQuery = { profiles_by_pk: { area: string | null, bio: string | null, city: string | null, country: string | null, created_at: any, date_of_birth: any, gender: Types.Genders_Enum, id: any, interested_in_gender: Types.Genders_Enum, location: any | null, province: string | null, seeking_relationship: string | null, sexuality: Types.Sexuality_Enum | null, updated_at: any } | null };

export type InsertProfileMutationVariables = Types.Exact<{
  gender: Types.InputMaybe<Types.Genders_Enum>;
  interested_in_gender: Types.InputMaybe<Types.Genders_Enum>;
  date_of_birth: Types.InputMaybe<Types.Scalars['date']>;
}>;


export type InsertProfileMutation = { insert_profiles_one: { created_at: any, date_of_birth: any, gender: Types.Genders_Enum, id: any, interested_in_gender: Types.Genders_Enum, location: any | null, province: string | null, seeking_relationship: string | null, sexuality: Types.Sexuality_Enum | null, updated_at: any, country: string | null, city: string | null, bio: string | null, area: string | null } | null };

export type UpdateProfileBioMutationVariables = Types.Exact<{
  id: Types.Scalars['uuid'];
  bio: Types.Scalars['String'];
}>;


export type UpdateProfileBioMutation = { update_profiles_by_pk: { bio: string | null } | null };

export type UpdateProfileLocationMutationVariables = Types.Exact<{
  id: Types.Scalars['uuid'];
  area: Types.Scalars['String'];
  city: Types.Scalars['String'];
  country: Types.Scalars['String'];
  location: Types.Scalars['geography'];
  province: Types.Scalars['String'];
}>;


export type UpdateProfileLocationMutation = { update_profiles_by_pk: { area: string | null, city: string | null, country: string | null, location: any | null, province: string | null, updated_at: any } | null };

export type UpdateProfilePreferenceMutationVariables = Types.Exact<{
  id: Types.Scalars['uuid'];
  sexuality?: Types.InputMaybe<Types.Sexuality_Enum>;
  seeking_relationship: Types.Scalars['String'];
}>;


export type UpdateProfilePreferenceMutation = { update_profiles_by_pk: { sexuality: Types.Sexuality_Enum | null, seeking_relationship: string | null, updated_at: any } | null };

export type UpdateProfileRelationPreferenceMutationVariables = Types.Exact<{
  id: Types.Scalars['uuid'];
  seeking_relationship: Types.Scalars['String'];
}>;


export type UpdateProfileRelationPreferenceMutation = { update_profiles_by_pk: { seeking_relationship: string | null } | null };

export type UpdateSexualityMutationVariables = Types.Exact<{
  id: Types.Scalars['uuid'];
  sexuality: Types.Sexuality_Enum;
}>;


export type UpdateSexualityMutation = { update_profiles_by_pk: { sexuality: Types.Sexuality_Enum | null } | null };

export const GetProfileDocument = /*#__PURE__*/ gql`
    query GetProfile($id: uuid!) {
  profiles_by_pk(id: $id) {
    area
    bio
    city
    country
    created_at
    date_of_birth
    gender
    id
    interested_in_gender
    location
    province
    seeking_relationship
    sexuality
    updated_at
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetProfileGQL extends Apollo.Query<GetProfileQuery, GetProfileQueryVariables> {
    override document = GetProfileDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const InsertProfileDocument = /*#__PURE__*/ gql`
    mutation InsertProfile($gender: genders_enum, $interested_in_gender: genders_enum, $date_of_birth: date) {
  insert_profiles_one(
    object: {gender: $gender, interested_in_gender: $interested_in_gender, date_of_birth: $date_of_birth}
  ) {
    created_at
    date_of_birth
    gender
    id
    interested_in_gender
    location
    province
    seeking_relationship
    sexuality
    updated_at
    country
    city
    bio
    area
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class InsertProfileGQL extends Apollo.Mutation<InsertProfileMutation, InsertProfileMutationVariables> {
    override document = InsertProfileDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const UpdateProfileBioDocument = /*#__PURE__*/ gql`
    mutation UpdateProfileBio($id: uuid!, $bio: String!) {
  update_profiles_by_pk(pk_columns: {id: $id}, _set: {bio: $bio}) {
    bio
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class UpdateProfileBioGQL extends Apollo.Mutation<UpdateProfileBioMutation, UpdateProfileBioMutationVariables> {
    override document = UpdateProfileBioDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const UpdateProfileLocationDocument = /*#__PURE__*/ gql`
    mutation UpdateProfileLocation($id: uuid!, $area: String!, $city: String!, $country: String!, $location: geography!, $province: String!) {
  update_profiles_by_pk(
    pk_columns: {id: $id}
    _set: {area: $area, city: $city, country: $country, location: $location, province: $province}
  ) {
    area
    city
    country
    location
    province
    updated_at
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class UpdateProfileLocationGQL extends Apollo.Mutation<UpdateProfileLocationMutation, UpdateProfileLocationMutationVariables> {
    override document = UpdateProfileLocationDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const UpdateProfilePreferenceDocument = /*#__PURE__*/ gql`
    mutation UpdateProfilePreference($id: uuid!, $sexuality: sexuality_enum = Bisexual, $seeking_relationship: String!) {
  update_profiles_by_pk(
    pk_columns: {id: $id}
    _set: {sexuality: $sexuality, seeking_relationship: $seeking_relationship}
  ) {
    sexuality
    seeking_relationship
    updated_at
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class UpdateProfilePreferenceGQL extends Apollo.Mutation<UpdateProfilePreferenceMutation, UpdateProfilePreferenceMutationVariables> {
    override document = UpdateProfilePreferenceDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const UpdateProfileRelationPreferenceDocument = /*#__PURE__*/ gql`
    mutation UpdateProfileRelationPreference($id: uuid!, $seeking_relationship: String!) {
  update_profiles_by_pk(
    pk_columns: {id: $id}
    _set: {seeking_relationship: $seeking_relationship}
  ) {
    seeking_relationship
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class UpdateProfileRelationPreferenceGQL extends Apollo.Mutation<UpdateProfileRelationPreferenceMutation, UpdateProfileRelationPreferenceMutationVariables> {
    override document = UpdateProfileRelationPreferenceDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const UpdateSexualityDocument = /*#__PURE__*/ gql`
    mutation UpdateSexuality($id: uuid!, $sexuality: sexuality_enum!) {
  update_profiles_by_pk(pk_columns: {id: $id}, _set: {sexuality: $sexuality}) {
    sexuality
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class UpdateSexualityGQL extends Apollo.Mutation<UpdateSexualityMutation, UpdateSexualityMutationVariables> {
    override document = UpdateSexualityDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }