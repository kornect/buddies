export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  bigint: any;
  bytea: any;
  citext: any;
  date: any;
  geography: any;
  geometry: any;
  jsonb: any;
  timestamptz: any;
  uuid: any;
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export interface Boolean_Comparison_Exp {
  _eq: InputMaybe<Scalars['Boolean']>;
  _gt: InputMaybe<Scalars['Boolean']>;
  _gte: InputMaybe<Scalars['Boolean']>;
  _in: InputMaybe<Array<Scalars['Boolean']>>;
  _is_null: InputMaybe<Scalars['Boolean']>;
  _lt: InputMaybe<Scalars['Boolean']>;
  _lte: InputMaybe<Scalars['Boolean']>;
  _neq: InputMaybe<Scalars['Boolean']>;
  _nin: InputMaybe<Array<Scalars['Boolean']>>;
}

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export interface Int_Comparison_Exp {
  _eq: InputMaybe<Scalars['Int']>;
  _gt: InputMaybe<Scalars['Int']>;
  _gte: InputMaybe<Scalars['Int']>;
  _in: InputMaybe<Array<Scalars['Int']>>;
  _is_null: InputMaybe<Scalars['Boolean']>;
  _lt: InputMaybe<Scalars['Int']>;
  _lte: InputMaybe<Scalars['Int']>;
  _neq: InputMaybe<Scalars['Int']>;
  _nin: InputMaybe<Array<Scalars['Int']>>;
}

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export interface String_Comparison_Exp {
  _eq: InputMaybe<Scalars['String']>;
  _gt: InputMaybe<Scalars['String']>;
  _gte: InputMaybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike: InputMaybe<Scalars['String']>;
  _in: InputMaybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex: InputMaybe<Scalars['String']>;
  _is_null: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like: InputMaybe<Scalars['String']>;
  _lt: InputMaybe<Scalars['String']>;
  _lte: InputMaybe<Scalars['String']>;
  _neq: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike: InputMaybe<Scalars['String']>;
  _nin: InputMaybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar: InputMaybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex: InputMaybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar: InputMaybe<Scalars['String']>;
}

/** append existing jsonb value of filtered columns with new jsonb value */
export interface AuthProviderRequests_Append_Input {
  options: InputMaybe<Scalars['jsonb']>;
}

/** Boolean expression to filter rows from the table "auth.provider_requests". All fields are combined with a logical 'AND'. */
export interface AuthProviderRequests_Bool_Exp {
  _and: InputMaybe<Array<AuthProviderRequests_Bool_Exp>>;
  _not: InputMaybe<AuthProviderRequests_Bool_Exp>;
  _or: InputMaybe<Array<AuthProviderRequests_Bool_Exp>>;
  id: InputMaybe<Uuid_Comparison_Exp>;
  options: InputMaybe<Jsonb_Comparison_Exp>;
}

/** unique or primary key constraints on table "auth.provider_requests" */
export enum AuthProviderRequests_Constraint {
  /** unique or primary key constraint on columns "id" */
  ProviderRequestsPkey = 'provider_requests_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export interface AuthProviderRequests_Delete_At_Path_Input {
  options: InputMaybe<Array<Scalars['String']>>;
}

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export interface AuthProviderRequests_Delete_Elem_Input {
  options: InputMaybe<Scalars['Int']>;
}

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export interface AuthProviderRequests_Delete_Key_Input {
  options: InputMaybe<Scalars['String']>;
}

/** input type for inserting data into table "auth.provider_requests" */
export interface AuthProviderRequests_Insert_Input {
  id: InputMaybe<Scalars['uuid']>;
  options: InputMaybe<Scalars['jsonb']>;
}

/** on_conflict condition type for table "auth.provider_requests" */
export interface AuthProviderRequests_On_Conflict {
  constraint: AuthProviderRequests_Constraint;
  update_columns: Array<AuthProviderRequests_Update_Column>;
  where: InputMaybe<AuthProviderRequests_Bool_Exp>;
}

/** Ordering options when selecting data from "auth.provider_requests". */
export interface AuthProviderRequests_Order_By {
  id: InputMaybe<Order_By>;
  options: InputMaybe<Order_By>;
}

/** primary key columns input for table: authProviderRequests */
export interface AuthProviderRequests_Pk_Columns_Input {
  id: Scalars['uuid'];
}

/** prepend existing jsonb value of filtered columns with new jsonb value */
export interface AuthProviderRequests_Prepend_Input {
  options: InputMaybe<Scalars['jsonb']>;
}

/** select columns of table "auth.provider_requests" */
export enum AuthProviderRequests_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Options = 'options'
}

/** input type for updating data in table "auth.provider_requests" */
export interface AuthProviderRequests_Set_Input {
  id: InputMaybe<Scalars['uuid']>;
  options: InputMaybe<Scalars['jsonb']>;
}

/** update columns of table "auth.provider_requests" */
export enum AuthProviderRequests_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Options = 'options'
}

export interface AuthProviderRequests_Updates {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append: InputMaybe<AuthProviderRequests_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path: InputMaybe<AuthProviderRequests_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem: InputMaybe<AuthProviderRequests_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key: InputMaybe<AuthProviderRequests_Delete_Key_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend: InputMaybe<AuthProviderRequests_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set: InputMaybe<AuthProviderRequests_Set_Input>;
  where: AuthProviderRequests_Bool_Exp;
}

/** Boolean expression to filter rows from the table "auth.providers". All fields are combined with a logical 'AND'. */
export interface AuthProviders_Bool_Exp {
  _and: InputMaybe<Array<AuthProviders_Bool_Exp>>;
  _not: InputMaybe<AuthProviders_Bool_Exp>;
  _or: InputMaybe<Array<AuthProviders_Bool_Exp>>;
  id: InputMaybe<String_Comparison_Exp>;
  userProviders: InputMaybe<AuthUserProviders_Bool_Exp>;
}

/** unique or primary key constraints on table "auth.providers" */
export enum AuthProviders_Constraint {
  /** unique or primary key constraint on columns "id" */
  ProvidersPkey = 'providers_pkey'
}

/** input type for inserting data into table "auth.providers" */
export interface AuthProviders_Insert_Input {
  id: InputMaybe<Scalars['String']>;
  userProviders: InputMaybe<AuthUserProviders_Arr_Rel_Insert_Input>;
}

/** input type for inserting object relation for remote table "auth.providers" */
export interface AuthProviders_Obj_Rel_Insert_Input {
  data: AuthProviders_Insert_Input;
  /** upsert condition */
  on_conflict: InputMaybe<AuthProviders_On_Conflict>;
}

/** on_conflict condition type for table "auth.providers" */
export interface AuthProviders_On_Conflict {
  constraint: AuthProviders_Constraint;
  update_columns: Array<AuthProviders_Update_Column>;
  where: InputMaybe<AuthProviders_Bool_Exp>;
}

/** Ordering options when selecting data from "auth.providers". */
export interface AuthProviders_Order_By {
  id: InputMaybe<Order_By>;
  userProviders_aggregate: InputMaybe<AuthUserProviders_Aggregate_Order_By>;
}

/** primary key columns input for table: authProviders */
export interface AuthProviders_Pk_Columns_Input {
  id: Scalars['String'];
}

/** select columns of table "auth.providers" */
export enum AuthProviders_Select_Column {
  /** column name */
  Id = 'id'
}

/** input type for updating data in table "auth.providers" */
export interface AuthProviders_Set_Input {
  id: InputMaybe<Scalars['String']>;
}

/** update columns of table "auth.providers" */
export enum AuthProviders_Update_Column {
  /** column name */
  Id = 'id'
}

export interface AuthProviders_Updates {
  /** sets the columns of the filtered rows to the given values */
  _set: InputMaybe<AuthProviders_Set_Input>;
  where: AuthProviders_Bool_Exp;
}

/** order by aggregate values of table "auth.refresh_tokens" */
export interface AuthRefreshTokens_Aggregate_Order_By {
  count: InputMaybe<Order_By>;
  max: InputMaybe<AuthRefreshTokens_Max_Order_By>;
  min: InputMaybe<AuthRefreshTokens_Min_Order_By>;
}

/** input type for inserting array relation for remote table "auth.refresh_tokens" */
export interface AuthRefreshTokens_Arr_Rel_Insert_Input {
  data: Array<AuthRefreshTokens_Insert_Input>;
  /** upsert condition */
  on_conflict: InputMaybe<AuthRefreshTokens_On_Conflict>;
}

/** Boolean expression to filter rows from the table "auth.refresh_tokens". All fields are combined with a logical 'AND'. */
export interface AuthRefreshTokens_Bool_Exp {
  _and: InputMaybe<Array<AuthRefreshTokens_Bool_Exp>>;
  _not: InputMaybe<AuthRefreshTokens_Bool_Exp>;
  _or: InputMaybe<Array<AuthRefreshTokens_Bool_Exp>>;
  createdAt: InputMaybe<Timestamptz_Comparison_Exp>;
  expiresAt: InputMaybe<Timestamptz_Comparison_Exp>;
  refreshToken: InputMaybe<Uuid_Comparison_Exp>;
  user: InputMaybe<Users_Bool_Exp>;
  userId: InputMaybe<Uuid_Comparison_Exp>;
}

/** unique or primary key constraints on table "auth.refresh_tokens" */
export enum AuthRefreshTokens_Constraint {
  /** unique or primary key constraint on columns "refresh_token" */
  RefreshTokensPkey = 'refresh_tokens_pkey'
}

/** input type for inserting data into table "auth.refresh_tokens" */
export interface AuthRefreshTokens_Insert_Input {
  createdAt: InputMaybe<Scalars['timestamptz']>;
  expiresAt: InputMaybe<Scalars['timestamptz']>;
  refreshToken: InputMaybe<Scalars['uuid']>;
  user: InputMaybe<Users_Obj_Rel_Insert_Input>;
  userId: InputMaybe<Scalars['uuid']>;
}

/** order by max() on columns of table "auth.refresh_tokens" */
export interface AuthRefreshTokens_Max_Order_By {
  createdAt: InputMaybe<Order_By>;
  expiresAt: InputMaybe<Order_By>;
  refreshToken: InputMaybe<Order_By>;
  userId: InputMaybe<Order_By>;
}

/** order by min() on columns of table "auth.refresh_tokens" */
export interface AuthRefreshTokens_Min_Order_By {
  createdAt: InputMaybe<Order_By>;
  expiresAt: InputMaybe<Order_By>;
  refreshToken: InputMaybe<Order_By>;
  userId: InputMaybe<Order_By>;
}

/** on_conflict condition type for table "auth.refresh_tokens" */
export interface AuthRefreshTokens_On_Conflict {
  constraint: AuthRefreshTokens_Constraint;
  update_columns: Array<AuthRefreshTokens_Update_Column>;
  where: InputMaybe<AuthRefreshTokens_Bool_Exp>;
}

/** Ordering options when selecting data from "auth.refresh_tokens". */
export interface AuthRefreshTokens_Order_By {
  createdAt: InputMaybe<Order_By>;
  expiresAt: InputMaybe<Order_By>;
  refreshToken: InputMaybe<Order_By>;
  user: InputMaybe<Users_Order_By>;
  userId: InputMaybe<Order_By>;
}

/** primary key columns input for table: authRefreshTokens */
export interface AuthRefreshTokens_Pk_Columns_Input {
  refreshToken: Scalars['uuid'];
}

/** select columns of table "auth.refresh_tokens" */
export enum AuthRefreshTokens_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  ExpiresAt = 'expiresAt',
  /** column name */
  RefreshToken = 'refreshToken',
  /** column name */
  UserId = 'userId'
}

/** input type for updating data in table "auth.refresh_tokens" */
export interface AuthRefreshTokens_Set_Input {
  createdAt: InputMaybe<Scalars['timestamptz']>;
  expiresAt: InputMaybe<Scalars['timestamptz']>;
  refreshToken: InputMaybe<Scalars['uuid']>;
  userId: InputMaybe<Scalars['uuid']>;
}

/** update columns of table "auth.refresh_tokens" */
export enum AuthRefreshTokens_Update_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  ExpiresAt = 'expiresAt',
  /** column name */
  RefreshToken = 'refreshToken',
  /** column name */
  UserId = 'userId'
}

export interface AuthRefreshTokens_Updates {
  /** sets the columns of the filtered rows to the given values */
  _set: InputMaybe<AuthRefreshTokens_Set_Input>;
  where: AuthRefreshTokens_Bool_Exp;
}

/** Boolean expression to filter rows from the table "auth.roles". All fields are combined with a logical 'AND'. */
export interface AuthRoles_Bool_Exp {
  _and: InputMaybe<Array<AuthRoles_Bool_Exp>>;
  _not: InputMaybe<AuthRoles_Bool_Exp>;
  _or: InputMaybe<Array<AuthRoles_Bool_Exp>>;
  role: InputMaybe<String_Comparison_Exp>;
  userRoles: InputMaybe<AuthUserRoles_Bool_Exp>;
  usersByDefaultRole: InputMaybe<Users_Bool_Exp>;
}

/** unique or primary key constraints on table "auth.roles" */
export enum AuthRoles_Constraint {
  /** unique or primary key constraint on columns "role" */
  RolesPkey = 'roles_pkey'
}

/** input type for inserting data into table "auth.roles" */
export interface AuthRoles_Insert_Input {
  role: InputMaybe<Scalars['String']>;
  userRoles: InputMaybe<AuthUserRoles_Arr_Rel_Insert_Input>;
  usersByDefaultRole: InputMaybe<Users_Arr_Rel_Insert_Input>;
}

/** input type for inserting object relation for remote table "auth.roles" */
export interface AuthRoles_Obj_Rel_Insert_Input {
  data: AuthRoles_Insert_Input;
  /** upsert condition */
  on_conflict: InputMaybe<AuthRoles_On_Conflict>;
}

/** on_conflict condition type for table "auth.roles" */
export interface AuthRoles_On_Conflict {
  constraint: AuthRoles_Constraint;
  update_columns: Array<AuthRoles_Update_Column>;
  where: InputMaybe<AuthRoles_Bool_Exp>;
}

/** Ordering options when selecting data from "auth.roles". */
export interface AuthRoles_Order_By {
  role: InputMaybe<Order_By>;
  userRoles_aggregate: InputMaybe<AuthUserRoles_Aggregate_Order_By>;
  usersByDefaultRole_aggregate: InputMaybe<Users_Aggregate_Order_By>;
}

/** primary key columns input for table: authRoles */
export interface AuthRoles_Pk_Columns_Input {
  role: Scalars['String'];
}

/** select columns of table "auth.roles" */
export enum AuthRoles_Select_Column {
  /** column name */
  Role = 'role'
}

/** input type for updating data in table "auth.roles" */
export interface AuthRoles_Set_Input {
  role: InputMaybe<Scalars['String']>;
}

/** update columns of table "auth.roles" */
export enum AuthRoles_Update_Column {
  /** column name */
  Role = 'role'
}

export interface AuthRoles_Updates {
  /** sets the columns of the filtered rows to the given values */
  _set: InputMaybe<AuthRoles_Set_Input>;
  where: AuthRoles_Bool_Exp;
}

/** order by aggregate values of table "auth.user_providers" */
export interface AuthUserProviders_Aggregate_Order_By {
  count: InputMaybe<Order_By>;
  max: InputMaybe<AuthUserProviders_Max_Order_By>;
  min: InputMaybe<AuthUserProviders_Min_Order_By>;
}

/** input type for inserting array relation for remote table "auth.user_providers" */
export interface AuthUserProviders_Arr_Rel_Insert_Input {
  data: Array<AuthUserProviders_Insert_Input>;
  /** upsert condition */
  on_conflict: InputMaybe<AuthUserProviders_On_Conflict>;
}

/** Boolean expression to filter rows from the table "auth.user_providers". All fields are combined with a logical 'AND'. */
export interface AuthUserProviders_Bool_Exp {
  _and: InputMaybe<Array<AuthUserProviders_Bool_Exp>>;
  _not: InputMaybe<AuthUserProviders_Bool_Exp>;
  _or: InputMaybe<Array<AuthUserProviders_Bool_Exp>>;
  accessToken: InputMaybe<String_Comparison_Exp>;
  createdAt: InputMaybe<Timestamptz_Comparison_Exp>;
  id: InputMaybe<Uuid_Comparison_Exp>;
  provider: InputMaybe<AuthProviders_Bool_Exp>;
  providerId: InputMaybe<String_Comparison_Exp>;
  providerUserId: InputMaybe<String_Comparison_Exp>;
  refreshToken: InputMaybe<String_Comparison_Exp>;
  updatedAt: InputMaybe<Timestamptz_Comparison_Exp>;
  user: InputMaybe<Users_Bool_Exp>;
  userId: InputMaybe<Uuid_Comparison_Exp>;
}

/** unique or primary key constraints on table "auth.user_providers" */
export enum AuthUserProviders_Constraint {
  /** unique or primary key constraint on columns "id" */
  UserProvidersPkey = 'user_providers_pkey',
  /** unique or primary key constraint on columns "provider_id", "provider_user_id" */
  UserProvidersProviderIdProviderUserIdKey = 'user_providers_provider_id_provider_user_id_key',
  /** unique or primary key constraint on columns "provider_id", "user_id" */
  UserProvidersUserIdProviderIdKey = 'user_providers_user_id_provider_id_key'
}

/** input type for inserting data into table "auth.user_providers" */
export interface AuthUserProviders_Insert_Input {
  accessToken: InputMaybe<Scalars['String']>;
  createdAt: InputMaybe<Scalars['timestamptz']>;
  id: InputMaybe<Scalars['uuid']>;
  provider: InputMaybe<AuthProviders_Obj_Rel_Insert_Input>;
  providerId: InputMaybe<Scalars['String']>;
  providerUserId: InputMaybe<Scalars['String']>;
  refreshToken: InputMaybe<Scalars['String']>;
  updatedAt: InputMaybe<Scalars['timestamptz']>;
  user: InputMaybe<Users_Obj_Rel_Insert_Input>;
  userId: InputMaybe<Scalars['uuid']>;
}

/** order by max() on columns of table "auth.user_providers" */
export interface AuthUserProviders_Max_Order_By {
  accessToken: InputMaybe<Order_By>;
  createdAt: InputMaybe<Order_By>;
  id: InputMaybe<Order_By>;
  providerId: InputMaybe<Order_By>;
  providerUserId: InputMaybe<Order_By>;
  refreshToken: InputMaybe<Order_By>;
  updatedAt: InputMaybe<Order_By>;
  userId: InputMaybe<Order_By>;
}

/** order by min() on columns of table "auth.user_providers" */
export interface AuthUserProviders_Min_Order_By {
  accessToken: InputMaybe<Order_By>;
  createdAt: InputMaybe<Order_By>;
  id: InputMaybe<Order_By>;
  providerId: InputMaybe<Order_By>;
  providerUserId: InputMaybe<Order_By>;
  refreshToken: InputMaybe<Order_By>;
  updatedAt: InputMaybe<Order_By>;
  userId: InputMaybe<Order_By>;
}

/** on_conflict condition type for table "auth.user_providers" */
export interface AuthUserProviders_On_Conflict {
  constraint: AuthUserProviders_Constraint;
  update_columns: Array<AuthUserProviders_Update_Column>;
  where: InputMaybe<AuthUserProviders_Bool_Exp>;
}

/** Ordering options when selecting data from "auth.user_providers". */
export interface AuthUserProviders_Order_By {
  accessToken: InputMaybe<Order_By>;
  createdAt: InputMaybe<Order_By>;
  id: InputMaybe<Order_By>;
  provider: InputMaybe<AuthProviders_Order_By>;
  providerId: InputMaybe<Order_By>;
  providerUserId: InputMaybe<Order_By>;
  refreshToken: InputMaybe<Order_By>;
  updatedAt: InputMaybe<Order_By>;
  user: InputMaybe<Users_Order_By>;
  userId: InputMaybe<Order_By>;
}

/** primary key columns input for table: authUserProviders */
export interface AuthUserProviders_Pk_Columns_Input {
  id: Scalars['uuid'];
}

/** select columns of table "auth.user_providers" */
export enum AuthUserProviders_Select_Column {
  /** column name */
  AccessToken = 'accessToken',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  ProviderId = 'providerId',
  /** column name */
  ProviderUserId = 'providerUserId',
  /** column name */
  RefreshToken = 'refreshToken',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UserId = 'userId'
}

/** input type for updating data in table "auth.user_providers" */
export interface AuthUserProviders_Set_Input {
  accessToken: InputMaybe<Scalars['String']>;
  createdAt: InputMaybe<Scalars['timestamptz']>;
  id: InputMaybe<Scalars['uuid']>;
  providerId: InputMaybe<Scalars['String']>;
  providerUserId: InputMaybe<Scalars['String']>;
  refreshToken: InputMaybe<Scalars['String']>;
  updatedAt: InputMaybe<Scalars['timestamptz']>;
  userId: InputMaybe<Scalars['uuid']>;
}

/** update columns of table "auth.user_providers" */
export enum AuthUserProviders_Update_Column {
  /** column name */
  AccessToken = 'accessToken',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  ProviderId = 'providerId',
  /** column name */
  ProviderUserId = 'providerUserId',
  /** column name */
  RefreshToken = 'refreshToken',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UserId = 'userId'
}

export interface AuthUserProviders_Updates {
  /** sets the columns of the filtered rows to the given values */
  _set: InputMaybe<AuthUserProviders_Set_Input>;
  where: AuthUserProviders_Bool_Exp;
}

/** order by aggregate values of table "auth.user_roles" */
export interface AuthUserRoles_Aggregate_Order_By {
  count: InputMaybe<Order_By>;
  max: InputMaybe<AuthUserRoles_Max_Order_By>;
  min: InputMaybe<AuthUserRoles_Min_Order_By>;
}

/** input type for inserting array relation for remote table "auth.user_roles" */
export interface AuthUserRoles_Arr_Rel_Insert_Input {
  data: Array<AuthUserRoles_Insert_Input>;
  /** upsert condition */
  on_conflict: InputMaybe<AuthUserRoles_On_Conflict>;
}

/** Boolean expression to filter rows from the table "auth.user_roles". All fields are combined with a logical 'AND'. */
export interface AuthUserRoles_Bool_Exp {
  _and: InputMaybe<Array<AuthUserRoles_Bool_Exp>>;
  _not: InputMaybe<AuthUserRoles_Bool_Exp>;
  _or: InputMaybe<Array<AuthUserRoles_Bool_Exp>>;
  createdAt: InputMaybe<Timestamptz_Comparison_Exp>;
  id: InputMaybe<Uuid_Comparison_Exp>;
  role: InputMaybe<String_Comparison_Exp>;
  roleByRole: InputMaybe<AuthRoles_Bool_Exp>;
  user: InputMaybe<Users_Bool_Exp>;
  userId: InputMaybe<Uuid_Comparison_Exp>;
}

/** unique or primary key constraints on table "auth.user_roles" */
export enum AuthUserRoles_Constraint {
  /** unique or primary key constraint on columns "id" */
  UserRolesPkey = 'user_roles_pkey',
  /** unique or primary key constraint on columns "user_id", "role" */
  UserRolesUserIdRoleKey = 'user_roles_user_id_role_key'
}

/** input type for inserting data into table "auth.user_roles" */
export interface AuthUserRoles_Insert_Input {
  createdAt: InputMaybe<Scalars['timestamptz']>;
  id: InputMaybe<Scalars['uuid']>;
  role: InputMaybe<Scalars['String']>;
  roleByRole: InputMaybe<AuthRoles_Obj_Rel_Insert_Input>;
  user: InputMaybe<Users_Obj_Rel_Insert_Input>;
  userId: InputMaybe<Scalars['uuid']>;
}

/** order by max() on columns of table "auth.user_roles" */
export interface AuthUserRoles_Max_Order_By {
  createdAt: InputMaybe<Order_By>;
  id: InputMaybe<Order_By>;
  role: InputMaybe<Order_By>;
  userId: InputMaybe<Order_By>;
}

/** order by min() on columns of table "auth.user_roles" */
export interface AuthUserRoles_Min_Order_By {
  createdAt: InputMaybe<Order_By>;
  id: InputMaybe<Order_By>;
  role: InputMaybe<Order_By>;
  userId: InputMaybe<Order_By>;
}

/** on_conflict condition type for table "auth.user_roles" */
export interface AuthUserRoles_On_Conflict {
  constraint: AuthUserRoles_Constraint;
  update_columns: Array<AuthUserRoles_Update_Column>;
  where: InputMaybe<AuthUserRoles_Bool_Exp>;
}

/** Ordering options when selecting data from "auth.user_roles". */
export interface AuthUserRoles_Order_By {
  createdAt: InputMaybe<Order_By>;
  id: InputMaybe<Order_By>;
  role: InputMaybe<Order_By>;
  roleByRole: InputMaybe<AuthRoles_Order_By>;
  user: InputMaybe<Users_Order_By>;
  userId: InputMaybe<Order_By>;
}

/** primary key columns input for table: authUserRoles */
export interface AuthUserRoles_Pk_Columns_Input {
  id: Scalars['uuid'];
}

/** select columns of table "auth.user_roles" */
export enum AuthUserRoles_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  Role = 'role',
  /** column name */
  UserId = 'userId'
}

/** input type for updating data in table "auth.user_roles" */
export interface AuthUserRoles_Set_Input {
  createdAt: InputMaybe<Scalars['timestamptz']>;
  id: InputMaybe<Scalars['uuid']>;
  role: InputMaybe<Scalars['String']>;
  userId: InputMaybe<Scalars['uuid']>;
}

/** update columns of table "auth.user_roles" */
export enum AuthUserRoles_Update_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  Role = 'role',
  /** column name */
  UserId = 'userId'
}

export interface AuthUserRoles_Updates {
  /** sets the columns of the filtered rows to the given values */
  _set: InputMaybe<AuthUserRoles_Set_Input>;
  where: AuthUserRoles_Bool_Exp;
}

/** order by aggregate values of table "auth.user_security_keys" */
export interface AuthUserSecurityKeys_Aggregate_Order_By {
  avg: InputMaybe<AuthUserSecurityKeys_Avg_Order_By>;
  count: InputMaybe<Order_By>;
  max: InputMaybe<AuthUserSecurityKeys_Max_Order_By>;
  min: InputMaybe<AuthUserSecurityKeys_Min_Order_By>;
  stddev: InputMaybe<AuthUserSecurityKeys_Stddev_Order_By>;
  stddev_pop: InputMaybe<AuthUserSecurityKeys_Stddev_Pop_Order_By>;
  stddev_samp: InputMaybe<AuthUserSecurityKeys_Stddev_Samp_Order_By>;
  sum: InputMaybe<AuthUserSecurityKeys_Sum_Order_By>;
  var_pop: InputMaybe<AuthUserSecurityKeys_Var_Pop_Order_By>;
  var_samp: InputMaybe<AuthUserSecurityKeys_Var_Samp_Order_By>;
  variance: InputMaybe<AuthUserSecurityKeys_Variance_Order_By>;
}

/** input type for inserting array relation for remote table "auth.user_security_keys" */
export interface AuthUserSecurityKeys_Arr_Rel_Insert_Input {
  data: Array<AuthUserSecurityKeys_Insert_Input>;
  /** upsert condition */
  on_conflict: InputMaybe<AuthUserSecurityKeys_On_Conflict>;
}

/** order by avg() on columns of table "auth.user_security_keys" */
export interface AuthUserSecurityKeys_Avg_Order_By {
  counter: InputMaybe<Order_By>;
}

/** Boolean expression to filter rows from the table "auth.user_security_keys". All fields are combined with a logical 'AND'. */
export interface AuthUserSecurityKeys_Bool_Exp {
  _and: InputMaybe<Array<AuthUserSecurityKeys_Bool_Exp>>;
  _not: InputMaybe<AuthUserSecurityKeys_Bool_Exp>;
  _or: InputMaybe<Array<AuthUserSecurityKeys_Bool_Exp>>;
  counter: InputMaybe<Bigint_Comparison_Exp>;
  credentialId: InputMaybe<String_Comparison_Exp>;
  credentialPublicKey: InputMaybe<Bytea_Comparison_Exp>;
  id: InputMaybe<Uuid_Comparison_Exp>;
  nickname: InputMaybe<String_Comparison_Exp>;
  transports: InputMaybe<String_Comparison_Exp>;
  user: InputMaybe<Users_Bool_Exp>;
  userId: InputMaybe<Uuid_Comparison_Exp>;
}

/** unique or primary key constraints on table "auth.user_security_keys" */
export enum AuthUserSecurityKeys_Constraint {
  /** unique or primary key constraint on columns "credential_id" */
  UserSecurityKeyCredentialIdKey = 'user_security_key_credential_id_key',
  /** unique or primary key constraint on columns "id" */
  UserSecurityKeysPkey = 'user_security_keys_pkey'
}

/** input type for incrementing numeric columns in table "auth.user_security_keys" */
export interface AuthUserSecurityKeys_Inc_Input {
  counter: InputMaybe<Scalars['bigint']>;
}

/** input type for inserting data into table "auth.user_security_keys" */
export interface AuthUserSecurityKeys_Insert_Input {
  counter: InputMaybe<Scalars['bigint']>;
  credentialId: InputMaybe<Scalars['String']>;
  credentialPublicKey: InputMaybe<Scalars['bytea']>;
  id: InputMaybe<Scalars['uuid']>;
  nickname: InputMaybe<Scalars['String']>;
  transports: InputMaybe<Scalars['String']>;
  user: InputMaybe<Users_Obj_Rel_Insert_Input>;
  userId: InputMaybe<Scalars['uuid']>;
}

/** order by max() on columns of table "auth.user_security_keys" */
export interface AuthUserSecurityKeys_Max_Order_By {
  counter: InputMaybe<Order_By>;
  credentialId: InputMaybe<Order_By>;
  id: InputMaybe<Order_By>;
  nickname: InputMaybe<Order_By>;
  transports: InputMaybe<Order_By>;
  userId: InputMaybe<Order_By>;
}

/** order by min() on columns of table "auth.user_security_keys" */
export interface AuthUserSecurityKeys_Min_Order_By {
  counter: InputMaybe<Order_By>;
  credentialId: InputMaybe<Order_By>;
  id: InputMaybe<Order_By>;
  nickname: InputMaybe<Order_By>;
  transports: InputMaybe<Order_By>;
  userId: InputMaybe<Order_By>;
}

/** on_conflict condition type for table "auth.user_security_keys" */
export interface AuthUserSecurityKeys_On_Conflict {
  constraint: AuthUserSecurityKeys_Constraint;
  update_columns: Array<AuthUserSecurityKeys_Update_Column>;
  where: InputMaybe<AuthUserSecurityKeys_Bool_Exp>;
}

/** Ordering options when selecting data from "auth.user_security_keys". */
export interface AuthUserSecurityKeys_Order_By {
  counter: InputMaybe<Order_By>;
  credentialId: InputMaybe<Order_By>;
  credentialPublicKey: InputMaybe<Order_By>;
  id: InputMaybe<Order_By>;
  nickname: InputMaybe<Order_By>;
  transports: InputMaybe<Order_By>;
  user: InputMaybe<Users_Order_By>;
  userId: InputMaybe<Order_By>;
}

/** primary key columns input for table: authUserSecurityKeys */
export interface AuthUserSecurityKeys_Pk_Columns_Input {
  id: Scalars['uuid'];
}

/** select columns of table "auth.user_security_keys" */
export enum AuthUserSecurityKeys_Select_Column {
  /** column name */
  Counter = 'counter',
  /** column name */
  CredentialId = 'credentialId',
  /** column name */
  CredentialPublicKey = 'credentialPublicKey',
  /** column name */
  Id = 'id',
  /** column name */
  Nickname = 'nickname',
  /** column name */
  Transports = 'transports',
  /** column name */
  UserId = 'userId'
}

/** input type for updating data in table "auth.user_security_keys" */
export interface AuthUserSecurityKeys_Set_Input {
  counter: InputMaybe<Scalars['bigint']>;
  credentialId: InputMaybe<Scalars['String']>;
  credentialPublicKey: InputMaybe<Scalars['bytea']>;
  id: InputMaybe<Scalars['uuid']>;
  nickname: InputMaybe<Scalars['String']>;
  transports: InputMaybe<Scalars['String']>;
  userId: InputMaybe<Scalars['uuid']>;
}

/** order by stddev() on columns of table "auth.user_security_keys" */
export interface AuthUserSecurityKeys_Stddev_Order_By {
  counter: InputMaybe<Order_By>;
}

/** order by stddev_pop() on columns of table "auth.user_security_keys" */
export interface AuthUserSecurityKeys_Stddev_Pop_Order_By {
  counter: InputMaybe<Order_By>;
}

/** order by stddev_samp() on columns of table "auth.user_security_keys" */
export interface AuthUserSecurityKeys_Stddev_Samp_Order_By {
  counter: InputMaybe<Order_By>;
}

/** order by sum() on columns of table "auth.user_security_keys" */
export interface AuthUserSecurityKeys_Sum_Order_By {
  counter: InputMaybe<Order_By>;
}

/** update columns of table "auth.user_security_keys" */
export enum AuthUserSecurityKeys_Update_Column {
  /** column name */
  Counter = 'counter',
  /** column name */
  CredentialId = 'credentialId',
  /** column name */
  CredentialPublicKey = 'credentialPublicKey',
  /** column name */
  Id = 'id',
  /** column name */
  Nickname = 'nickname',
  /** column name */
  Transports = 'transports',
  /** column name */
  UserId = 'userId'
}

export interface AuthUserSecurityKeys_Updates {
  /** increments the numeric columns with given value of the filtered values */
  _inc: InputMaybe<AuthUserSecurityKeys_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set: InputMaybe<AuthUserSecurityKeys_Set_Input>;
  where: AuthUserSecurityKeys_Bool_Exp;
}

/** order by var_pop() on columns of table "auth.user_security_keys" */
export interface AuthUserSecurityKeys_Var_Pop_Order_By {
  counter: InputMaybe<Order_By>;
}

/** order by var_samp() on columns of table "auth.user_security_keys" */
export interface AuthUserSecurityKeys_Var_Samp_Order_By {
  counter: InputMaybe<Order_By>;
}

/** order by variance() on columns of table "auth.user_security_keys" */
export interface AuthUserSecurityKeys_Variance_Order_By {
  counter: InputMaybe<Order_By>;
}

/** Boolean expression to compare columns of type "bigint". All fields are combined with logical 'AND'. */
export interface Bigint_Comparison_Exp {
  _eq: InputMaybe<Scalars['bigint']>;
  _gt: InputMaybe<Scalars['bigint']>;
  _gte: InputMaybe<Scalars['bigint']>;
  _in: InputMaybe<Array<Scalars['bigint']>>;
  _is_null: InputMaybe<Scalars['Boolean']>;
  _lt: InputMaybe<Scalars['bigint']>;
  _lte: InputMaybe<Scalars['bigint']>;
  _neq: InputMaybe<Scalars['bigint']>;
  _nin: InputMaybe<Array<Scalars['bigint']>>;
}

/** Boolean expression to filter rows from the table "storage.buckets". All fields are combined with a logical 'AND'. */
export interface Buckets_Bool_Exp {
  _and: InputMaybe<Array<Buckets_Bool_Exp>>;
  _not: InputMaybe<Buckets_Bool_Exp>;
  _or: InputMaybe<Array<Buckets_Bool_Exp>>;
  cacheControl: InputMaybe<String_Comparison_Exp>;
  createdAt: InputMaybe<Timestamptz_Comparison_Exp>;
  downloadExpiration: InputMaybe<Int_Comparison_Exp>;
  files: InputMaybe<Files_Bool_Exp>;
  id: InputMaybe<String_Comparison_Exp>;
  maxUploadFileSize: InputMaybe<Int_Comparison_Exp>;
  minUploadFileSize: InputMaybe<Int_Comparison_Exp>;
  presignedUrlsEnabled: InputMaybe<Boolean_Comparison_Exp>;
  updatedAt: InputMaybe<Timestamptz_Comparison_Exp>;
}

/** unique or primary key constraints on table "storage.buckets" */
export enum Buckets_Constraint {
  /** unique or primary key constraint on columns "id" */
  BucketsPkey = 'buckets_pkey'
}

/** input type for incrementing numeric columns in table "storage.buckets" */
export interface Buckets_Inc_Input {
  downloadExpiration: InputMaybe<Scalars['Int']>;
  maxUploadFileSize: InputMaybe<Scalars['Int']>;
  minUploadFileSize: InputMaybe<Scalars['Int']>;
}

/** input type for inserting data into table "storage.buckets" */
export interface Buckets_Insert_Input {
  cacheControl: InputMaybe<Scalars['String']>;
  createdAt: InputMaybe<Scalars['timestamptz']>;
  downloadExpiration: InputMaybe<Scalars['Int']>;
  files: InputMaybe<Files_Arr_Rel_Insert_Input>;
  id: InputMaybe<Scalars['String']>;
  maxUploadFileSize: InputMaybe<Scalars['Int']>;
  minUploadFileSize: InputMaybe<Scalars['Int']>;
  presignedUrlsEnabled: InputMaybe<Scalars['Boolean']>;
  updatedAt: InputMaybe<Scalars['timestamptz']>;
}

/** input type for inserting object relation for remote table "storage.buckets" */
export interface Buckets_Obj_Rel_Insert_Input {
  data: Buckets_Insert_Input;
  /** upsert condition */
  on_conflict: InputMaybe<Buckets_On_Conflict>;
}

/** on_conflict condition type for table "storage.buckets" */
export interface Buckets_On_Conflict {
  constraint: Buckets_Constraint;
  update_columns: Array<Buckets_Update_Column>;
  where: InputMaybe<Buckets_Bool_Exp>;
}

/** Ordering options when selecting data from "storage.buckets". */
export interface Buckets_Order_By {
  cacheControl: InputMaybe<Order_By>;
  createdAt: InputMaybe<Order_By>;
  downloadExpiration: InputMaybe<Order_By>;
  files_aggregate: InputMaybe<Files_Aggregate_Order_By>;
  id: InputMaybe<Order_By>;
  maxUploadFileSize: InputMaybe<Order_By>;
  minUploadFileSize: InputMaybe<Order_By>;
  presignedUrlsEnabled: InputMaybe<Order_By>;
  updatedAt: InputMaybe<Order_By>;
}

/** primary key columns input for table: buckets */
export interface Buckets_Pk_Columns_Input {
  id: Scalars['String'];
}

/** select columns of table "storage.buckets" */
export enum Buckets_Select_Column {
  /** column name */
  CacheControl = 'cacheControl',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  DownloadExpiration = 'downloadExpiration',
  /** column name */
  Id = 'id',
  /** column name */
  MaxUploadFileSize = 'maxUploadFileSize',
  /** column name */
  MinUploadFileSize = 'minUploadFileSize',
  /** column name */
  PresignedUrlsEnabled = 'presignedUrlsEnabled',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** input type for updating data in table "storage.buckets" */
export interface Buckets_Set_Input {
  cacheControl: InputMaybe<Scalars['String']>;
  createdAt: InputMaybe<Scalars['timestamptz']>;
  downloadExpiration: InputMaybe<Scalars['Int']>;
  id: InputMaybe<Scalars['String']>;
  maxUploadFileSize: InputMaybe<Scalars['Int']>;
  minUploadFileSize: InputMaybe<Scalars['Int']>;
  presignedUrlsEnabled: InputMaybe<Scalars['Boolean']>;
  updatedAt: InputMaybe<Scalars['timestamptz']>;
}

/** update columns of table "storage.buckets" */
export enum Buckets_Update_Column {
  /** column name */
  CacheControl = 'cacheControl',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  DownloadExpiration = 'downloadExpiration',
  /** column name */
  Id = 'id',
  /** column name */
  MaxUploadFileSize = 'maxUploadFileSize',
  /** column name */
  MinUploadFileSize = 'minUploadFileSize',
  /** column name */
  PresignedUrlsEnabled = 'presignedUrlsEnabled',
  /** column name */
  UpdatedAt = 'updatedAt'
}

export interface Buckets_Updates {
  /** increments the numeric columns with given value of the filtered values */
  _inc: InputMaybe<Buckets_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set: InputMaybe<Buckets_Set_Input>;
  where: Buckets_Bool_Exp;
}

/** Boolean expression to compare columns of type "bytea". All fields are combined with logical 'AND'. */
export interface Bytea_Comparison_Exp {
  _eq: InputMaybe<Scalars['bytea']>;
  _gt: InputMaybe<Scalars['bytea']>;
  _gte: InputMaybe<Scalars['bytea']>;
  _in: InputMaybe<Array<Scalars['bytea']>>;
  _is_null: InputMaybe<Scalars['Boolean']>;
  _lt: InputMaybe<Scalars['bytea']>;
  _lte: InputMaybe<Scalars['bytea']>;
  _neq: InputMaybe<Scalars['bytea']>;
  _nin: InputMaybe<Array<Scalars['bytea']>>;
}

/** Boolean expression to compare columns of type "citext". All fields are combined with logical 'AND'. */
export interface Citext_Comparison_Exp {
  _eq: InputMaybe<Scalars['citext']>;
  _gt: InputMaybe<Scalars['citext']>;
  _gte: InputMaybe<Scalars['citext']>;
  /** does the column match the given case-insensitive pattern */
  _ilike: InputMaybe<Scalars['citext']>;
  _in: InputMaybe<Array<Scalars['citext']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex: InputMaybe<Scalars['citext']>;
  _is_null: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like: InputMaybe<Scalars['citext']>;
  _lt: InputMaybe<Scalars['citext']>;
  _lte: InputMaybe<Scalars['citext']>;
  _neq: InputMaybe<Scalars['citext']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike: InputMaybe<Scalars['citext']>;
  _nin: InputMaybe<Array<Scalars['citext']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex: InputMaybe<Scalars['citext']>;
  /** does the column NOT match the given pattern */
  _nlike: InputMaybe<Scalars['citext']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex: InputMaybe<Scalars['citext']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar: InputMaybe<Scalars['citext']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex: InputMaybe<Scalars['citext']>;
  /** does the column match the given SQL regular expression */
  _similar: InputMaybe<Scalars['citext']>;
}

/** Boolean expression to compare columns of type "date". All fields are combined with logical 'AND'. */
export interface Date_Comparison_Exp {
  _eq: InputMaybe<Scalars['date']>;
  _gt: InputMaybe<Scalars['date']>;
  _gte: InputMaybe<Scalars['date']>;
  _in: InputMaybe<Array<Scalars['date']>>;
  _is_null: InputMaybe<Scalars['Boolean']>;
  _lt: InputMaybe<Scalars['date']>;
  _lte: InputMaybe<Scalars['date']>;
  _neq: InputMaybe<Scalars['date']>;
  _nin: InputMaybe<Array<Scalars['date']>>;
}

/** order by aggregate values of table "storage.files" */
export interface Files_Aggregate_Order_By {
  avg: InputMaybe<Files_Avg_Order_By>;
  count: InputMaybe<Order_By>;
  max: InputMaybe<Files_Max_Order_By>;
  min: InputMaybe<Files_Min_Order_By>;
  stddev: InputMaybe<Files_Stddev_Order_By>;
  stddev_pop: InputMaybe<Files_Stddev_Pop_Order_By>;
  stddev_samp: InputMaybe<Files_Stddev_Samp_Order_By>;
  sum: InputMaybe<Files_Sum_Order_By>;
  var_pop: InputMaybe<Files_Var_Pop_Order_By>;
  var_samp: InputMaybe<Files_Var_Samp_Order_By>;
  variance: InputMaybe<Files_Variance_Order_By>;
}

/** input type for inserting array relation for remote table "storage.files" */
export interface Files_Arr_Rel_Insert_Input {
  data: Array<Files_Insert_Input>;
  /** upsert condition */
  on_conflict: InputMaybe<Files_On_Conflict>;
}

/** order by avg() on columns of table "storage.files" */
export interface Files_Avg_Order_By {
  size: InputMaybe<Order_By>;
}

/** Boolean expression to filter rows from the table "storage.files". All fields are combined with a logical 'AND'. */
export interface Files_Bool_Exp {
  _and: InputMaybe<Array<Files_Bool_Exp>>;
  _not: InputMaybe<Files_Bool_Exp>;
  _or: InputMaybe<Array<Files_Bool_Exp>>;
  bucket: InputMaybe<Buckets_Bool_Exp>;
  bucketId: InputMaybe<String_Comparison_Exp>;
  createdAt: InputMaybe<Timestamptz_Comparison_Exp>;
  etag: InputMaybe<String_Comparison_Exp>;
  id: InputMaybe<Uuid_Comparison_Exp>;
  isUploaded: InputMaybe<Boolean_Comparison_Exp>;
  mimeType: InputMaybe<String_Comparison_Exp>;
  name: InputMaybe<String_Comparison_Exp>;
  size: InputMaybe<Int_Comparison_Exp>;
  updatedAt: InputMaybe<Timestamptz_Comparison_Exp>;
  uploadedByUserId: InputMaybe<Uuid_Comparison_Exp>;
}

/** unique or primary key constraints on table "storage.files" */
export enum Files_Constraint {
  /** unique or primary key constraint on columns "id" */
  FilesPkey = 'files_pkey'
}

/** input type for incrementing numeric columns in table "storage.files" */
export interface Files_Inc_Input {
  size: InputMaybe<Scalars['Int']>;
}

/** input type for inserting data into table "storage.files" */
export interface Files_Insert_Input {
  bucket: InputMaybe<Buckets_Obj_Rel_Insert_Input>;
  bucketId: InputMaybe<Scalars['String']>;
  createdAt: InputMaybe<Scalars['timestamptz']>;
  etag: InputMaybe<Scalars['String']>;
  id: InputMaybe<Scalars['uuid']>;
  isUploaded: InputMaybe<Scalars['Boolean']>;
  mimeType: InputMaybe<Scalars['String']>;
  name: InputMaybe<Scalars['String']>;
  size: InputMaybe<Scalars['Int']>;
  updatedAt: InputMaybe<Scalars['timestamptz']>;
  uploadedByUserId: InputMaybe<Scalars['uuid']>;
}

/** order by max() on columns of table "storage.files" */
export interface Files_Max_Order_By {
  bucketId: InputMaybe<Order_By>;
  createdAt: InputMaybe<Order_By>;
  etag: InputMaybe<Order_By>;
  id: InputMaybe<Order_By>;
  mimeType: InputMaybe<Order_By>;
  name: InputMaybe<Order_By>;
  size: InputMaybe<Order_By>;
  updatedAt: InputMaybe<Order_By>;
  uploadedByUserId: InputMaybe<Order_By>;
}

/** order by min() on columns of table "storage.files" */
export interface Files_Min_Order_By {
  bucketId: InputMaybe<Order_By>;
  createdAt: InputMaybe<Order_By>;
  etag: InputMaybe<Order_By>;
  id: InputMaybe<Order_By>;
  mimeType: InputMaybe<Order_By>;
  name: InputMaybe<Order_By>;
  size: InputMaybe<Order_By>;
  updatedAt: InputMaybe<Order_By>;
  uploadedByUserId: InputMaybe<Order_By>;
}

/** on_conflict condition type for table "storage.files" */
export interface Files_On_Conflict {
  constraint: Files_Constraint;
  update_columns: Array<Files_Update_Column>;
  where: InputMaybe<Files_Bool_Exp>;
}

/** Ordering options when selecting data from "storage.files". */
export interface Files_Order_By {
  bucket: InputMaybe<Buckets_Order_By>;
  bucketId: InputMaybe<Order_By>;
  createdAt: InputMaybe<Order_By>;
  etag: InputMaybe<Order_By>;
  id: InputMaybe<Order_By>;
  isUploaded: InputMaybe<Order_By>;
  mimeType: InputMaybe<Order_By>;
  name: InputMaybe<Order_By>;
  size: InputMaybe<Order_By>;
  updatedAt: InputMaybe<Order_By>;
  uploadedByUserId: InputMaybe<Order_By>;
}

/** primary key columns input for table: files */
export interface Files_Pk_Columns_Input {
  id: Scalars['uuid'];
}

/** select columns of table "storage.files" */
export enum Files_Select_Column {
  /** column name */
  BucketId = 'bucketId',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Etag = 'etag',
  /** column name */
  Id = 'id',
  /** column name */
  IsUploaded = 'isUploaded',
  /** column name */
  MimeType = 'mimeType',
  /** column name */
  Name = 'name',
  /** column name */
  Size = 'size',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UploadedByUserId = 'uploadedByUserId'
}

/** input type for updating data in table "storage.files" */
export interface Files_Set_Input {
  bucketId: InputMaybe<Scalars['String']>;
  createdAt: InputMaybe<Scalars['timestamptz']>;
  etag: InputMaybe<Scalars['String']>;
  id: InputMaybe<Scalars['uuid']>;
  isUploaded: InputMaybe<Scalars['Boolean']>;
  mimeType: InputMaybe<Scalars['String']>;
  name: InputMaybe<Scalars['String']>;
  size: InputMaybe<Scalars['Int']>;
  updatedAt: InputMaybe<Scalars['timestamptz']>;
  uploadedByUserId: InputMaybe<Scalars['uuid']>;
}

/** order by stddev() on columns of table "storage.files" */
export interface Files_Stddev_Order_By {
  size: InputMaybe<Order_By>;
}

/** order by stddev_pop() on columns of table "storage.files" */
export interface Files_Stddev_Pop_Order_By {
  size: InputMaybe<Order_By>;
}

/** order by stddev_samp() on columns of table "storage.files" */
export interface Files_Stddev_Samp_Order_By {
  size: InputMaybe<Order_By>;
}

/** order by sum() on columns of table "storage.files" */
export interface Files_Sum_Order_By {
  size: InputMaybe<Order_By>;
}

/** update columns of table "storage.files" */
export enum Files_Update_Column {
  /** column name */
  BucketId = 'bucketId',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Etag = 'etag',
  /** column name */
  Id = 'id',
  /** column name */
  IsUploaded = 'isUploaded',
  /** column name */
  MimeType = 'mimeType',
  /** column name */
  Name = 'name',
  /** column name */
  Size = 'size',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UploadedByUserId = 'uploadedByUserId'
}

export interface Files_Updates {
  /** increments the numeric columns with given value of the filtered values */
  _inc: InputMaybe<Files_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set: InputMaybe<Files_Set_Input>;
  where: Files_Bool_Exp;
}

/** order by var_pop() on columns of table "storage.files" */
export interface Files_Var_Pop_Order_By {
  size: InputMaybe<Order_By>;
}

/** order by var_samp() on columns of table "storage.files" */
export interface Files_Var_Samp_Order_By {
  size: InputMaybe<Order_By>;
}

/** order by variance() on columns of table "storage.files" */
export interface Files_Variance_Order_By {
  size: InputMaybe<Order_By>;
}

/** Boolean expression to filter rows from the table "genders". All fields are combined with a logical 'AND'. */
export interface Genders_Bool_Exp {
  _and: InputMaybe<Array<Genders_Bool_Exp>>;
  _not: InputMaybe<Genders_Bool_Exp>;
  _or: InputMaybe<Array<Genders_Bool_Exp>>;
  name: InputMaybe<String_Comparison_Exp>;
}

/** unique or primary key constraints on table "genders" */
export enum Genders_Constraint {
  /** unique or primary key constraint on columns "name" */
  GendersPkey = 'genders_pkey'
}

export enum Genders_Enum {
  Man = 'man',
  Woman = 'woman'
}

/** Boolean expression to compare columns of type "genders_enum". All fields are combined with logical 'AND'. */
export interface Genders_Enum_Comparison_Exp {
  _eq: InputMaybe<Genders_Enum>;
  _in: InputMaybe<Array<Genders_Enum>>;
  _is_null: InputMaybe<Scalars['Boolean']>;
  _neq: InputMaybe<Genders_Enum>;
  _nin: InputMaybe<Array<Genders_Enum>>;
}

/** input type for inserting data into table "genders" */
export interface Genders_Insert_Input {
  name: InputMaybe<Scalars['String']>;
}

/** on_conflict condition type for table "genders" */
export interface Genders_On_Conflict {
  constraint: Genders_Constraint;
  update_columns: Array<Genders_Update_Column>;
  where: InputMaybe<Genders_Bool_Exp>;
}

/** Ordering options when selecting data from "genders". */
export interface Genders_Order_By {
  name: InputMaybe<Order_By>;
}

/** primary key columns input for table: genders */
export interface Genders_Pk_Columns_Input {
  name: Scalars['String'];
}

/** select columns of table "genders" */
export enum Genders_Select_Column {
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "genders" */
export interface Genders_Set_Input {
  name: InputMaybe<Scalars['String']>;
}

/** update columns of table "genders" */
export enum Genders_Update_Column {
  /** column name */
  Name = 'name'
}

export interface Genders_Updates {
  /** sets the columns of the filtered rows to the given values */
  _set: InputMaybe<Genders_Set_Input>;
  where: Genders_Bool_Exp;
}

export interface Geography_Cast_Exp {
  geometry: InputMaybe<Geometry_Comparison_Exp>;
}

/** Boolean expression to compare columns of type "geography". All fields are combined with logical 'AND'. */
export interface Geography_Comparison_Exp {
  _cast: InputMaybe<Geography_Cast_Exp>;
  _eq: InputMaybe<Scalars['geography']>;
  _gt: InputMaybe<Scalars['geography']>;
  _gte: InputMaybe<Scalars['geography']>;
  _in: InputMaybe<Array<Scalars['geography']>>;
  _is_null: InputMaybe<Scalars['Boolean']>;
  _lt: InputMaybe<Scalars['geography']>;
  _lte: InputMaybe<Scalars['geography']>;
  _neq: InputMaybe<Scalars['geography']>;
  _nin: InputMaybe<Array<Scalars['geography']>>;
  /** is the column within a given distance from the given geography value */
  _st_d_within: InputMaybe<St_D_Within_Geography_Input>;
  /** does the column spatially intersect the given geography value */
  _st_intersects: InputMaybe<Scalars['geography']>;
}

export interface Geometry_Cast_Exp {
  geography: InputMaybe<Geography_Comparison_Exp>;
}

/** Boolean expression to compare columns of type "geometry". All fields are combined with logical 'AND'. */
export interface Geometry_Comparison_Exp {
  _cast: InputMaybe<Geometry_Cast_Exp>;
  _eq: InputMaybe<Scalars['geometry']>;
  _gt: InputMaybe<Scalars['geometry']>;
  _gte: InputMaybe<Scalars['geometry']>;
  _in: InputMaybe<Array<Scalars['geometry']>>;
  _is_null: InputMaybe<Scalars['Boolean']>;
  _lt: InputMaybe<Scalars['geometry']>;
  _lte: InputMaybe<Scalars['geometry']>;
  _neq: InputMaybe<Scalars['geometry']>;
  _nin: InputMaybe<Array<Scalars['geometry']>>;
  /** is the column within a given 3D distance from the given geometry value */
  _st_3d_d_within: InputMaybe<St_D_Within_Input>;
  /** does the column spatially intersect the given geometry value in 3D */
  _st_3d_intersects: InputMaybe<Scalars['geometry']>;
  /** does the column contain the given geometry value */
  _st_contains: InputMaybe<Scalars['geometry']>;
  /** does the column cross the given geometry value */
  _st_crosses: InputMaybe<Scalars['geometry']>;
  /** is the column within a given distance from the given geometry value */
  _st_d_within: InputMaybe<St_D_Within_Input>;
  /** is the column equal to given geometry value (directionality is ignored) */
  _st_equals: InputMaybe<Scalars['geometry']>;
  /** does the column spatially intersect the given geometry value */
  _st_intersects: InputMaybe<Scalars['geometry']>;
  /** does the column 'spatially overlap' (intersect but not completely contain) the given geometry value */
  _st_overlaps: InputMaybe<Scalars['geometry']>;
  /** does the column have atleast one point in common with the given geometry value */
  _st_touches: InputMaybe<Scalars['geometry']>;
  /** is the column contained in the given geometry value */
  _st_within: InputMaybe<Scalars['geometry']>;
}

export interface Jsonb_Cast_Exp {
  String: InputMaybe<String_Comparison_Exp>;
}

/** Boolean expression to compare columns of type "jsonb". All fields are combined with logical 'AND'. */
export interface Jsonb_Comparison_Exp {
  _cast: InputMaybe<Jsonb_Cast_Exp>;
  /** is the column contained in the given json value */
  _contained_in: InputMaybe<Scalars['jsonb']>;
  /** does the column contain the given json value at the top level */
  _contains: InputMaybe<Scalars['jsonb']>;
  _eq: InputMaybe<Scalars['jsonb']>;
  _gt: InputMaybe<Scalars['jsonb']>;
  _gte: InputMaybe<Scalars['jsonb']>;
  /** does the string exist as a top-level key in the column */
  _has_key: InputMaybe<Scalars['String']>;
  /** do all of these strings exist as top-level keys in the column */
  _has_keys_all: InputMaybe<Array<Scalars['String']>>;
  /** do any of these strings exist as top-level keys in the column */
  _has_keys_any: InputMaybe<Array<Scalars['String']>>;
  _in: InputMaybe<Array<Scalars['jsonb']>>;
  _is_null: InputMaybe<Scalars['Boolean']>;
  _lt: InputMaybe<Scalars['jsonb']>;
  _lte: InputMaybe<Scalars['jsonb']>;
  _neq: InputMaybe<Scalars['jsonb']>;
  _nin: InputMaybe<Array<Scalars['jsonb']>>;
}

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

/** Boolean expression to filter rows from the table "profiles". All fields are combined with a logical 'AND'. */
export interface Profiles_Bool_Exp {
  _and: InputMaybe<Array<Profiles_Bool_Exp>>;
  _not: InputMaybe<Profiles_Bool_Exp>;
  _or: InputMaybe<Array<Profiles_Bool_Exp>>;
  area: InputMaybe<String_Comparison_Exp>;
  bio: InputMaybe<String_Comparison_Exp>;
  city: InputMaybe<String_Comparison_Exp>;
  country: InputMaybe<String_Comparison_Exp>;
  created_at: InputMaybe<Timestamptz_Comparison_Exp>;
  date_of_birth: InputMaybe<Date_Comparison_Exp>;
  gender: InputMaybe<Genders_Enum_Comparison_Exp>;
  id: InputMaybe<Uuid_Comparison_Exp>;
  interested_in_gender: InputMaybe<Genders_Enum_Comparison_Exp>;
  location: InputMaybe<Geography_Comparison_Exp>;
  province: InputMaybe<String_Comparison_Exp>;
  seeking_relationship: InputMaybe<String_Comparison_Exp>;
  sexuality: InputMaybe<Sexuality_Enum_Comparison_Exp>;
  updated_at: InputMaybe<Timestamptz_Comparison_Exp>;
}

/** unique or primary key constraints on table "profiles" */
export enum Profiles_Constraint {
  /** unique or primary key constraint on columns "id" */
  ProfilesPkey = 'profiles_pkey'
}

/** input type for inserting data into table "profiles" */
export interface Profiles_Insert_Input {
  area: InputMaybe<Scalars['String']>;
  bio: InputMaybe<Scalars['String']>;
  city: InputMaybe<Scalars['String']>;
  country: InputMaybe<Scalars['String']>;
  created_at: InputMaybe<Scalars['timestamptz']>;
  date_of_birth: InputMaybe<Scalars['date']>;
  gender: InputMaybe<Genders_Enum>;
  id: InputMaybe<Scalars['uuid']>;
  interested_in_gender: InputMaybe<Genders_Enum>;
  location: InputMaybe<Scalars['geography']>;
  province: InputMaybe<Scalars['String']>;
  seeking_relationship: InputMaybe<Scalars['String']>;
  sexuality: InputMaybe<Sexuality_Enum>;
  updated_at: InputMaybe<Scalars['timestamptz']>;
}

/** on_conflict condition type for table "profiles" */
export interface Profiles_On_Conflict {
  constraint: Profiles_Constraint;
  update_columns: Array<Profiles_Update_Column>;
  where: InputMaybe<Profiles_Bool_Exp>;
}

/** Ordering options when selecting data from "profiles". */
export interface Profiles_Order_By {
  area: InputMaybe<Order_By>;
  bio: InputMaybe<Order_By>;
  city: InputMaybe<Order_By>;
  country: InputMaybe<Order_By>;
  created_at: InputMaybe<Order_By>;
  date_of_birth: InputMaybe<Order_By>;
  gender: InputMaybe<Order_By>;
  id: InputMaybe<Order_By>;
  interested_in_gender: InputMaybe<Order_By>;
  location: InputMaybe<Order_By>;
  province: InputMaybe<Order_By>;
  seeking_relationship: InputMaybe<Order_By>;
  sexuality: InputMaybe<Order_By>;
  updated_at: InputMaybe<Order_By>;
}

/** primary key columns input for table: profiles */
export interface Profiles_Pk_Columns_Input {
  id: Scalars['uuid'];
}

/** select columns of table "profiles" */
export enum Profiles_Select_Column {
  /** column name */
  Area = 'area',
  /** column name */
  Bio = 'bio',
  /** column name */
  City = 'city',
  /** column name */
  Country = 'country',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DateOfBirth = 'date_of_birth',
  /** column name */
  Gender = 'gender',
  /** column name */
  Id = 'id',
  /** column name */
  InterestedInGender = 'interested_in_gender',
  /** column name */
  Location = 'location',
  /** column name */
  Province = 'province',
  /** column name */
  SeekingRelationship = 'seeking_relationship',
  /** column name */
  Sexuality = 'sexuality',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "profiles" */
export interface Profiles_Set_Input {
  area: InputMaybe<Scalars['String']>;
  bio: InputMaybe<Scalars['String']>;
  city: InputMaybe<Scalars['String']>;
  country: InputMaybe<Scalars['String']>;
  created_at: InputMaybe<Scalars['timestamptz']>;
  date_of_birth: InputMaybe<Scalars['date']>;
  gender: InputMaybe<Genders_Enum>;
  id: InputMaybe<Scalars['uuid']>;
  interested_in_gender: InputMaybe<Genders_Enum>;
  location: InputMaybe<Scalars['geography']>;
  province: InputMaybe<Scalars['String']>;
  seeking_relationship: InputMaybe<Scalars['String']>;
  sexuality: InputMaybe<Sexuality_Enum>;
  updated_at: InputMaybe<Scalars['timestamptz']>;
}

/** update columns of table "profiles" */
export enum Profiles_Update_Column {
  /** column name */
  Area = 'area',
  /** column name */
  Bio = 'bio',
  /** column name */
  City = 'city',
  /** column name */
  Country = 'country',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DateOfBirth = 'date_of_birth',
  /** column name */
  Gender = 'gender',
  /** column name */
  Id = 'id',
  /** column name */
  InterestedInGender = 'interested_in_gender',
  /** column name */
  Location = 'location',
  /** column name */
  Province = 'province',
  /** column name */
  SeekingRelationship = 'seeking_relationship',
  /** column name */
  Sexuality = 'sexuality',
  /** column name */
  UpdatedAt = 'updated_at'
}

export interface Profiles_Updates {
  /** sets the columns of the filtered rows to the given values */
  _set: InputMaybe<Profiles_Set_Input>;
  where: Profiles_Bool_Exp;
}

/** Boolean expression to filter rows from the table "relationships". All fields are combined with a logical 'AND'. */
export interface Relationships_Bool_Exp {
  _and: InputMaybe<Array<Relationships_Bool_Exp>>;
  _not: InputMaybe<Relationships_Bool_Exp>;
  _or: InputMaybe<Array<Relationships_Bool_Exp>>;
  name: InputMaybe<String_Comparison_Exp>;
}

/** unique or primary key constraints on table "relationships" */
export enum Relationships_Constraint {
  /** unique or primary key constraint on columns "name" */
  RelationshipsPkey = 'relationships_pkey'
}

/** input type for inserting data into table "relationships" */
export interface Relationships_Insert_Input {
  name: InputMaybe<Scalars['String']>;
}

/** on_conflict condition type for table "relationships" */
export interface Relationships_On_Conflict {
  constraint: Relationships_Constraint;
  update_columns: Array<Relationships_Update_Column>;
  where: InputMaybe<Relationships_Bool_Exp>;
}

/** Ordering options when selecting data from "relationships". */
export interface Relationships_Order_By {
  name: InputMaybe<Order_By>;
}

/** primary key columns input for table: relationships */
export interface Relationships_Pk_Columns_Input {
  name: Scalars['String'];
}

/** select columns of table "relationships" */
export enum Relationships_Select_Column {
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "relationships" */
export interface Relationships_Set_Input {
  name: InputMaybe<Scalars['String']>;
}

/** update columns of table "relationships" */
export enum Relationships_Update_Column {
  /** column name */
  Name = 'name'
}

export interface Relationships_Updates {
  /** sets the columns of the filtered rows to the given values */
  _set: InputMaybe<Relationships_Set_Input>;
  where: Relationships_Bool_Exp;
}

/** Boolean expression to filter rows from the table "sexuality". All fields are combined with a logical 'AND'. */
export interface Sexuality_Bool_Exp {
  _and: InputMaybe<Array<Sexuality_Bool_Exp>>;
  _not: InputMaybe<Sexuality_Bool_Exp>;
  _or: InputMaybe<Array<Sexuality_Bool_Exp>>;
  name: InputMaybe<String_Comparison_Exp>;
}

/** unique or primary key constraints on table "sexuality" */
export enum Sexuality_Constraint {
  /** unique or primary key constraint on columns "name" */
  SexualityPkey = 'sexuality_pkey'
}

export enum Sexuality_Enum {
  Bisexual = 'Bisexual',
  Homosexual = 'Homosexual',
  Straight = 'Straight'
}

/** Boolean expression to compare columns of type "sexuality_enum". All fields are combined with logical 'AND'. */
export interface Sexuality_Enum_Comparison_Exp {
  _eq: InputMaybe<Sexuality_Enum>;
  _in: InputMaybe<Array<Sexuality_Enum>>;
  _is_null: InputMaybe<Scalars['Boolean']>;
  _neq: InputMaybe<Sexuality_Enum>;
  _nin: InputMaybe<Array<Sexuality_Enum>>;
}

/** input type for inserting data into table "sexuality" */
export interface Sexuality_Insert_Input {
  name: InputMaybe<Scalars['String']>;
}

/** on_conflict condition type for table "sexuality" */
export interface Sexuality_On_Conflict {
  constraint: Sexuality_Constraint;
  update_columns: Array<Sexuality_Update_Column>;
  where: InputMaybe<Sexuality_Bool_Exp>;
}

/** Ordering options when selecting data from "sexuality". */
export interface Sexuality_Order_By {
  name: InputMaybe<Order_By>;
}

/** primary key columns input for table: sexuality */
export interface Sexuality_Pk_Columns_Input {
  name: Scalars['String'];
}

/** select columns of table "sexuality" */
export enum Sexuality_Select_Column {
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "sexuality" */
export interface Sexuality_Set_Input {
  name: InputMaybe<Scalars['String']>;
}

/** update columns of table "sexuality" */
export enum Sexuality_Update_Column {
  /** column name */
  Name = 'name'
}

export interface Sexuality_Updates {
  /** sets the columns of the filtered rows to the given values */
  _set: InputMaybe<Sexuality_Set_Input>;
  where: Sexuality_Bool_Exp;
}

export interface St_D_Within_Geography_Input {
  distance: Scalars['Float'];
  from: Scalars['geography'];
  use_spheroid: InputMaybe<Scalars['Boolean']>;
}

export interface St_D_Within_Input {
  distance: Scalars['Float'];
  from: Scalars['geometry'];
}

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export interface Timestamptz_Comparison_Exp {
  _eq: InputMaybe<Scalars['timestamptz']>;
  _gt: InputMaybe<Scalars['timestamptz']>;
  _gte: InputMaybe<Scalars['timestamptz']>;
  _in: InputMaybe<Array<Scalars['timestamptz']>>;
  _is_null: InputMaybe<Scalars['Boolean']>;
  _lt: InputMaybe<Scalars['timestamptz']>;
  _lte: InputMaybe<Scalars['timestamptz']>;
  _neq: InputMaybe<Scalars['timestamptz']>;
  _nin: InputMaybe<Array<Scalars['timestamptz']>>;
}

/** order by aggregate values of table "auth.users" */
export interface Users_Aggregate_Order_By {
  count: InputMaybe<Order_By>;
  max: InputMaybe<Users_Max_Order_By>;
  min: InputMaybe<Users_Min_Order_By>;
}

/** append existing jsonb value of filtered columns with new jsonb value */
export interface Users_Append_Input {
  metadata: InputMaybe<Scalars['jsonb']>;
}

/** input type for inserting array relation for remote table "auth.users" */
export interface Users_Arr_Rel_Insert_Input {
  data: Array<Users_Insert_Input>;
  /** upsert condition */
  on_conflict: InputMaybe<Users_On_Conflict>;
}

/** Boolean expression to filter rows from the table "auth.users". All fields are combined with a logical 'AND'. */
export interface Users_Bool_Exp {
  _and: InputMaybe<Array<Users_Bool_Exp>>;
  _not: InputMaybe<Users_Bool_Exp>;
  _or: InputMaybe<Array<Users_Bool_Exp>>;
  activeMfaType: InputMaybe<String_Comparison_Exp>;
  avatarUrl: InputMaybe<String_Comparison_Exp>;
  createdAt: InputMaybe<Timestamptz_Comparison_Exp>;
  currentChallenge: InputMaybe<String_Comparison_Exp>;
  defaultRole: InputMaybe<String_Comparison_Exp>;
  defaultRoleByRole: InputMaybe<AuthRoles_Bool_Exp>;
  disabled: InputMaybe<Boolean_Comparison_Exp>;
  displayName: InputMaybe<String_Comparison_Exp>;
  email: InputMaybe<Citext_Comparison_Exp>;
  emailVerified: InputMaybe<Boolean_Comparison_Exp>;
  id: InputMaybe<Uuid_Comparison_Exp>;
  isAnonymous: InputMaybe<Boolean_Comparison_Exp>;
  lastSeen: InputMaybe<Timestamptz_Comparison_Exp>;
  locale: InputMaybe<String_Comparison_Exp>;
  metadata: InputMaybe<Jsonb_Comparison_Exp>;
  newEmail: InputMaybe<Citext_Comparison_Exp>;
  otpHash: InputMaybe<String_Comparison_Exp>;
  otpHashExpiresAt: InputMaybe<Timestamptz_Comparison_Exp>;
  otpMethodLastUsed: InputMaybe<String_Comparison_Exp>;
  passwordHash: InputMaybe<String_Comparison_Exp>;
  phoneNumber: InputMaybe<String_Comparison_Exp>;
  phoneNumberVerified: InputMaybe<Boolean_Comparison_Exp>;
  refreshTokens: InputMaybe<AuthRefreshTokens_Bool_Exp>;
  roles: InputMaybe<AuthUserRoles_Bool_Exp>;
  securityKeys: InputMaybe<AuthUserSecurityKeys_Bool_Exp>;
  ticket: InputMaybe<String_Comparison_Exp>;
  ticketExpiresAt: InputMaybe<Timestamptz_Comparison_Exp>;
  totpSecret: InputMaybe<String_Comparison_Exp>;
  updatedAt: InputMaybe<Timestamptz_Comparison_Exp>;
  userProviders: InputMaybe<AuthUserProviders_Bool_Exp>;
}

/** unique or primary key constraints on table "auth.users" */
export enum Users_Constraint {
  /** unique or primary key constraint on columns "email" */
  UsersEmailKey = 'users_email_key',
  /** unique or primary key constraint on columns "phone_number" */
  UsersPhoneNumberKey = 'users_phone_number_key',
  /** unique or primary key constraint on columns "id" */
  UsersPkey = 'users_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export interface Users_Delete_At_Path_Input {
  metadata: InputMaybe<Array<Scalars['String']>>;
}

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export interface Users_Delete_Elem_Input {
  metadata: InputMaybe<Scalars['Int']>;
}

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export interface Users_Delete_Key_Input {
  metadata: InputMaybe<Scalars['String']>;
}

/** input type for inserting data into table "auth.users" */
export interface Users_Insert_Input {
  activeMfaType: InputMaybe<Scalars['String']>;
  avatarUrl: InputMaybe<Scalars['String']>;
  createdAt: InputMaybe<Scalars['timestamptz']>;
  currentChallenge: InputMaybe<Scalars['String']>;
  defaultRole: InputMaybe<Scalars['String']>;
  defaultRoleByRole: InputMaybe<AuthRoles_Obj_Rel_Insert_Input>;
  disabled: InputMaybe<Scalars['Boolean']>;
  displayName: InputMaybe<Scalars['String']>;
  email: InputMaybe<Scalars['citext']>;
  emailVerified: InputMaybe<Scalars['Boolean']>;
  id: InputMaybe<Scalars['uuid']>;
  isAnonymous: InputMaybe<Scalars['Boolean']>;
  lastSeen: InputMaybe<Scalars['timestamptz']>;
  locale: InputMaybe<Scalars['String']>;
  metadata: InputMaybe<Scalars['jsonb']>;
  newEmail: InputMaybe<Scalars['citext']>;
  otpHash: InputMaybe<Scalars['String']>;
  otpHashExpiresAt: InputMaybe<Scalars['timestamptz']>;
  otpMethodLastUsed: InputMaybe<Scalars['String']>;
  passwordHash: InputMaybe<Scalars['String']>;
  phoneNumber: InputMaybe<Scalars['String']>;
  phoneNumberVerified: InputMaybe<Scalars['Boolean']>;
  refreshTokens: InputMaybe<AuthRefreshTokens_Arr_Rel_Insert_Input>;
  roles: InputMaybe<AuthUserRoles_Arr_Rel_Insert_Input>;
  securityKeys: InputMaybe<AuthUserSecurityKeys_Arr_Rel_Insert_Input>;
  ticket: InputMaybe<Scalars['String']>;
  ticketExpiresAt: InputMaybe<Scalars['timestamptz']>;
  totpSecret: InputMaybe<Scalars['String']>;
  updatedAt: InputMaybe<Scalars['timestamptz']>;
  userProviders: InputMaybe<AuthUserProviders_Arr_Rel_Insert_Input>;
}

/** order by max() on columns of table "auth.users" */
export interface Users_Max_Order_By {
  activeMfaType: InputMaybe<Order_By>;
  avatarUrl: InputMaybe<Order_By>;
  createdAt: InputMaybe<Order_By>;
  currentChallenge: InputMaybe<Order_By>;
  defaultRole: InputMaybe<Order_By>;
  displayName: InputMaybe<Order_By>;
  email: InputMaybe<Order_By>;
  id: InputMaybe<Order_By>;
  lastSeen: InputMaybe<Order_By>;
  locale: InputMaybe<Order_By>;
  newEmail: InputMaybe<Order_By>;
  otpHash: InputMaybe<Order_By>;
  otpHashExpiresAt: InputMaybe<Order_By>;
  otpMethodLastUsed: InputMaybe<Order_By>;
  passwordHash: InputMaybe<Order_By>;
  phoneNumber: InputMaybe<Order_By>;
  ticket: InputMaybe<Order_By>;
  ticketExpiresAt: InputMaybe<Order_By>;
  totpSecret: InputMaybe<Order_By>;
  updatedAt: InputMaybe<Order_By>;
}

/** order by min() on columns of table "auth.users" */
export interface Users_Min_Order_By {
  activeMfaType: InputMaybe<Order_By>;
  avatarUrl: InputMaybe<Order_By>;
  createdAt: InputMaybe<Order_By>;
  currentChallenge: InputMaybe<Order_By>;
  defaultRole: InputMaybe<Order_By>;
  displayName: InputMaybe<Order_By>;
  email: InputMaybe<Order_By>;
  id: InputMaybe<Order_By>;
  lastSeen: InputMaybe<Order_By>;
  locale: InputMaybe<Order_By>;
  newEmail: InputMaybe<Order_By>;
  otpHash: InputMaybe<Order_By>;
  otpHashExpiresAt: InputMaybe<Order_By>;
  otpMethodLastUsed: InputMaybe<Order_By>;
  passwordHash: InputMaybe<Order_By>;
  phoneNumber: InputMaybe<Order_By>;
  ticket: InputMaybe<Order_By>;
  ticketExpiresAt: InputMaybe<Order_By>;
  totpSecret: InputMaybe<Order_By>;
  updatedAt: InputMaybe<Order_By>;
}

/** input type for inserting object relation for remote table "auth.users" */
export interface Users_Obj_Rel_Insert_Input {
  data: Users_Insert_Input;
  /** upsert condition */
  on_conflict: InputMaybe<Users_On_Conflict>;
}

/** on_conflict condition type for table "auth.users" */
export interface Users_On_Conflict {
  constraint: Users_Constraint;
  update_columns: Array<Users_Update_Column>;
  where: InputMaybe<Users_Bool_Exp>;
}

/** Ordering options when selecting data from "auth.users". */
export interface Users_Order_By {
  activeMfaType: InputMaybe<Order_By>;
  avatarUrl: InputMaybe<Order_By>;
  createdAt: InputMaybe<Order_By>;
  currentChallenge: InputMaybe<Order_By>;
  defaultRole: InputMaybe<Order_By>;
  defaultRoleByRole: InputMaybe<AuthRoles_Order_By>;
  disabled: InputMaybe<Order_By>;
  displayName: InputMaybe<Order_By>;
  email: InputMaybe<Order_By>;
  emailVerified: InputMaybe<Order_By>;
  id: InputMaybe<Order_By>;
  isAnonymous: InputMaybe<Order_By>;
  lastSeen: InputMaybe<Order_By>;
  locale: InputMaybe<Order_By>;
  metadata: InputMaybe<Order_By>;
  newEmail: InputMaybe<Order_By>;
  otpHash: InputMaybe<Order_By>;
  otpHashExpiresAt: InputMaybe<Order_By>;
  otpMethodLastUsed: InputMaybe<Order_By>;
  passwordHash: InputMaybe<Order_By>;
  phoneNumber: InputMaybe<Order_By>;
  phoneNumberVerified: InputMaybe<Order_By>;
  refreshTokens_aggregate: InputMaybe<AuthRefreshTokens_Aggregate_Order_By>;
  roles_aggregate: InputMaybe<AuthUserRoles_Aggregate_Order_By>;
  securityKeys_aggregate: InputMaybe<AuthUserSecurityKeys_Aggregate_Order_By>;
  ticket: InputMaybe<Order_By>;
  ticketExpiresAt: InputMaybe<Order_By>;
  totpSecret: InputMaybe<Order_By>;
  updatedAt: InputMaybe<Order_By>;
  userProviders_aggregate: InputMaybe<AuthUserProviders_Aggregate_Order_By>;
}

/** primary key columns input for table: users */
export interface Users_Pk_Columns_Input {
  id: Scalars['uuid'];
}

/** prepend existing jsonb value of filtered columns with new jsonb value */
export interface Users_Prepend_Input {
  metadata: InputMaybe<Scalars['jsonb']>;
}

/** select columns of table "auth.users" */
export enum Users_Select_Column {
  /** column name */
  ActiveMfaType = 'activeMfaType',
  /** column name */
  AvatarUrl = 'avatarUrl',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  CurrentChallenge = 'currentChallenge',
  /** column name */
  DefaultRole = 'defaultRole',
  /** column name */
  Disabled = 'disabled',
  /** column name */
  DisplayName = 'displayName',
  /** column name */
  Email = 'email',
  /** column name */
  EmailVerified = 'emailVerified',
  /** column name */
  Id = 'id',
  /** column name */
  IsAnonymous = 'isAnonymous',
  /** column name */
  LastSeen = 'lastSeen',
  /** column name */
  Locale = 'locale',
  /** column name */
  Metadata = 'metadata',
  /** column name */
  NewEmail = 'newEmail',
  /** column name */
  OtpHash = 'otpHash',
  /** column name */
  OtpHashExpiresAt = 'otpHashExpiresAt',
  /** column name */
  OtpMethodLastUsed = 'otpMethodLastUsed',
  /** column name */
  PasswordHash = 'passwordHash',
  /** column name */
  PhoneNumber = 'phoneNumber',
  /** column name */
  PhoneNumberVerified = 'phoneNumberVerified',
  /** column name */
  Ticket = 'ticket',
  /** column name */
  TicketExpiresAt = 'ticketExpiresAt',
  /** column name */
  TotpSecret = 'totpSecret',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** input type for updating data in table "auth.users" */
export interface Users_Set_Input {
  activeMfaType: InputMaybe<Scalars['String']>;
  avatarUrl: InputMaybe<Scalars['String']>;
  createdAt: InputMaybe<Scalars['timestamptz']>;
  currentChallenge: InputMaybe<Scalars['String']>;
  defaultRole: InputMaybe<Scalars['String']>;
  disabled: InputMaybe<Scalars['Boolean']>;
  displayName: InputMaybe<Scalars['String']>;
  email: InputMaybe<Scalars['citext']>;
  emailVerified: InputMaybe<Scalars['Boolean']>;
  id: InputMaybe<Scalars['uuid']>;
  isAnonymous: InputMaybe<Scalars['Boolean']>;
  lastSeen: InputMaybe<Scalars['timestamptz']>;
  locale: InputMaybe<Scalars['String']>;
  metadata: InputMaybe<Scalars['jsonb']>;
  newEmail: InputMaybe<Scalars['citext']>;
  otpHash: InputMaybe<Scalars['String']>;
  otpHashExpiresAt: InputMaybe<Scalars['timestamptz']>;
  otpMethodLastUsed: InputMaybe<Scalars['String']>;
  passwordHash: InputMaybe<Scalars['String']>;
  phoneNumber: InputMaybe<Scalars['String']>;
  phoneNumberVerified: InputMaybe<Scalars['Boolean']>;
  ticket: InputMaybe<Scalars['String']>;
  ticketExpiresAt: InputMaybe<Scalars['timestamptz']>;
  totpSecret: InputMaybe<Scalars['String']>;
  updatedAt: InputMaybe<Scalars['timestamptz']>;
}

/** update columns of table "auth.users" */
export enum Users_Update_Column {
  /** column name */
  ActiveMfaType = 'activeMfaType',
  /** column name */
  AvatarUrl = 'avatarUrl',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  CurrentChallenge = 'currentChallenge',
  /** column name */
  DefaultRole = 'defaultRole',
  /** column name */
  Disabled = 'disabled',
  /** column name */
  DisplayName = 'displayName',
  /** column name */
  Email = 'email',
  /** column name */
  EmailVerified = 'emailVerified',
  /** column name */
  Id = 'id',
  /** column name */
  IsAnonymous = 'isAnonymous',
  /** column name */
  LastSeen = 'lastSeen',
  /** column name */
  Locale = 'locale',
  /** column name */
  Metadata = 'metadata',
  /** column name */
  NewEmail = 'newEmail',
  /** column name */
  OtpHash = 'otpHash',
  /** column name */
  OtpHashExpiresAt = 'otpHashExpiresAt',
  /** column name */
  OtpMethodLastUsed = 'otpMethodLastUsed',
  /** column name */
  PasswordHash = 'passwordHash',
  /** column name */
  PhoneNumber = 'phoneNumber',
  /** column name */
  PhoneNumberVerified = 'phoneNumberVerified',
  /** column name */
  Ticket = 'ticket',
  /** column name */
  TicketExpiresAt = 'ticketExpiresAt',
  /** column name */
  TotpSecret = 'totpSecret',
  /** column name */
  UpdatedAt = 'updatedAt'
}

export interface Users_Updates {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append: InputMaybe<Users_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path: InputMaybe<Users_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem: InputMaybe<Users_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key: InputMaybe<Users_Delete_Key_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend: InputMaybe<Users_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set: InputMaybe<Users_Set_Input>;
  where: Users_Bool_Exp;
}

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export interface Uuid_Comparison_Exp {
  _eq: InputMaybe<Scalars['uuid']>;
  _gt: InputMaybe<Scalars['uuid']>;
  _gte: InputMaybe<Scalars['uuid']>;
  _in: InputMaybe<Array<Scalars['uuid']>>;
  _is_null: InputMaybe<Scalars['Boolean']>;
  _lt: InputMaybe<Scalars['uuid']>;
  _lte: InputMaybe<Scalars['uuid']>;
  _neq: InputMaybe<Scalars['uuid']>;
  _nin: InputMaybe<Array<Scalars['uuid']>>;
}
