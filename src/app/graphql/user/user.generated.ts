import * as Types from '../types';

import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type SendSignupOtpMutationVariables = Types.Exact<{
  email: Types.Scalars['String'];
}>;


export type SendSignupOtpMutation = { users_send_registration_token: { success: boolean } };

export type SignUpMutationVariables = Types.Exact<{
  confirmToken: Types.Scalars['String'];
  email: Types.Scalars['String'];
  password: Types.Scalars['String'];
}>;


export type SignUpMutation = { users_register_user: { uuid: string } };

export type EmailExistsMutationVariables = Types.Exact<{
  email: Types.Scalars['String'];
}>;


export type EmailExistsMutation = { users_check_for_email_exists: { exists: boolean } };

export type SignUpTokenValidMutationVariables = Types.Exact<{
  email: Types.Scalars['String'];
  token: Types.Scalars['String'];
}>;


export type SignUpTokenValidMutation = { users_validate_sign_up_token: { valid: boolean } };

export type GetUserQueryVariables = Types.Exact<{
  uuid: Types.Scalars['uuid'];
}>;


export type GetUserQuery = { users_by_pk: { email: string, email_confirmed: boolean, last_login_at: any | null, phone_number: string | null, phone_number_confirmed: boolean, roles: any | null, two_factor_enabled: boolean, uuid: any, created_at: any, updated_at: any } | null };

export const SendSignupOtpDocument = /*#__PURE__*/ gql`
    mutation sendSignupOtp($email: String!) {
  users_send_registration_token(email: $email) {
    success
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class SendSignupOtpGQL extends Apollo.Mutation<SendSignupOtpMutation, SendSignupOtpMutationVariables> {
    override document = SendSignupOtpDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const SignUpDocument = /*#__PURE__*/ gql`
    mutation signUp($confirmToken: String!, $email: String!, $password: String!) {
  users_register_user(
    registerUser: {confirmToken: $confirmToken, email: $email, password: $password}
  ) {
    uuid
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class SignUpGQL extends Apollo.Mutation<SignUpMutation, SignUpMutationVariables> {
    override document = SignUpDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const EmailExistsDocument = /*#__PURE__*/ gql`
    mutation emailExists($email: String!) {
  users_check_for_email_exists(email: $email) {
    exists
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class EmailExistsGQL extends Apollo.Mutation<EmailExistsMutation, EmailExistsMutationVariables> {
    override document = EmailExistsDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const SignUpTokenValidDocument = /*#__PURE__*/ gql`
    mutation signUpTokenValid($email: String!, $token: String!) {
  users_validate_sign_up_token(email: $email, token: $token) {
    valid
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class SignUpTokenValidGQL extends Apollo.Mutation<SignUpTokenValidMutation, SignUpTokenValidMutationVariables> {
    override document = SignUpTokenValidDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const GetUserDocument = /*#__PURE__*/ gql`
    query GetUser($uuid: uuid!) {
  users_by_pk(uuid: $uuid) {
    email
    email_confirmed
    last_login_at
    phone_number
    phone_number_confirmed
    roles
    two_factor_enabled
    uuid
    created_at
    updated_at
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetUserGQL extends Apollo.Query<GetUserQuery, GetUserQueryVariables> {
    override document = GetUserDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }