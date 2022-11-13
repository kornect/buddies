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
  DateTime: any;
  _text: any;
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

export interface RegisterUserInput {
  confirmToken: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
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

/** Boolean expression to compare columns of type "_text". All fields are combined with logical 'AND'. */
export interface _Text_Comparison_Exp {
  _eq: InputMaybe<Scalars['_text']>;
  _gt: InputMaybe<Scalars['_text']>;
  _gte: InputMaybe<Scalars['_text']>;
  _in: InputMaybe<Array<Scalars['_text']>>;
  _is_null: InputMaybe<Scalars['Boolean']>;
  _lt: InputMaybe<Scalars['_text']>;
  _lte: InputMaybe<Scalars['_text']>;
  _neq: InputMaybe<Scalars['_text']>;
  _nin: InputMaybe<Array<Scalars['_text']>>;
}

/** ordering argument of a cursor */
export enum Cursor_Ordering {
  /** ascending ordering of the cursor */
  Asc = 'ASC',
  /** descending ordering of the cursor */
  Desc = 'DESC'
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

/** Boolean expression to filter rows from the table "auth.users". All fields are combined with a logical 'AND'. */
export interface Users_Bool_Exp {
  _and: InputMaybe<Array<Users_Bool_Exp>>;
  _not: InputMaybe<Users_Bool_Exp>;
  _or: InputMaybe<Array<Users_Bool_Exp>>;
  created_at: InputMaybe<Timestamptz_Comparison_Exp>;
  email: InputMaybe<String_Comparison_Exp>;
  email_confirmed: InputMaybe<Boolean_Comparison_Exp>;
  last_login_at: InputMaybe<Timestamptz_Comparison_Exp>;
  locked_out: InputMaybe<Boolean_Comparison_Exp>;
  locked_out_end: InputMaybe<Timestamptz_Comparison_Exp>;
  password_hash: InputMaybe<String_Comparison_Exp>;
  phone_number: InputMaybe<String_Comparison_Exp>;
  phone_number_confirmed: InputMaybe<Boolean_Comparison_Exp>;
  roles: InputMaybe<_Text_Comparison_Exp>;
  security_stamp: InputMaybe<String_Comparison_Exp>;
  two_factor_enabled: InputMaybe<Boolean_Comparison_Exp>;
  updated_at: InputMaybe<Timestamptz_Comparison_Exp>;
  uuid: InputMaybe<Uuid_Comparison_Exp>;
}

/** unique or primary key constraints on table "auth.users" */
export enum Users_Constraint {
  /** unique or primary key constraint on columns "email" */
  UsersEmailUnique = 'users_email_unique',
  /** unique or primary key constraint on columns "uuid" */
  UsersPkey = 'users_pkey'
}

/** input type for inserting data into table "auth.users" */
export interface Users_Insert_Input {
  created_at: InputMaybe<Scalars['timestamptz']>;
  email: InputMaybe<Scalars['String']>;
  email_confirmed: InputMaybe<Scalars['Boolean']>;
  last_login_at: InputMaybe<Scalars['timestamptz']>;
  locked_out: InputMaybe<Scalars['Boolean']>;
  locked_out_end: InputMaybe<Scalars['timestamptz']>;
  password_hash: InputMaybe<Scalars['String']>;
  phone_number: InputMaybe<Scalars['String']>;
  phone_number_confirmed: InputMaybe<Scalars['Boolean']>;
  roles: InputMaybe<Scalars['_text']>;
  security_stamp: InputMaybe<Scalars['String']>;
  two_factor_enabled: InputMaybe<Scalars['Boolean']>;
  updated_at: InputMaybe<Scalars['timestamptz']>;
  uuid: InputMaybe<Scalars['uuid']>;
}

/** on_conflict condition type for table "auth.users" */
export interface Users_On_Conflict {
  constraint: Users_Constraint;
  update_columns: Array<Users_Update_Column>;
  where: InputMaybe<Users_Bool_Exp>;
}

/** Ordering options when selecting data from "auth.users". */
export interface Users_Order_By {
  created_at: InputMaybe<Order_By>;
  email: InputMaybe<Order_By>;
  email_confirmed: InputMaybe<Order_By>;
  last_login_at: InputMaybe<Order_By>;
  locked_out: InputMaybe<Order_By>;
  locked_out_end: InputMaybe<Order_By>;
  password_hash: InputMaybe<Order_By>;
  phone_number: InputMaybe<Order_By>;
  phone_number_confirmed: InputMaybe<Order_By>;
  roles: InputMaybe<Order_By>;
  security_stamp: InputMaybe<Order_By>;
  two_factor_enabled: InputMaybe<Order_By>;
  updated_at: InputMaybe<Order_By>;
  uuid: InputMaybe<Order_By>;
}

/** primary key columns input for table: auth.users */
export interface Users_Pk_Columns_Input {
  uuid: Scalars['uuid'];
}

/** select columns of table "auth.users" */
export enum Users_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Email = 'email',
  /** column name */
  EmailConfirmed = 'email_confirmed',
  /** column name */
  LastLoginAt = 'last_login_at',
  /** column name */
  LockedOut = 'locked_out',
  /** column name */
  LockedOutEnd = 'locked_out_end',
  /** column name */
  PasswordHash = 'password_hash',
  /** column name */
  PhoneNumber = 'phone_number',
  /** column name */
  PhoneNumberConfirmed = 'phone_number_confirmed',
  /** column name */
  Roles = 'roles',
  /** column name */
  SecurityStamp = 'security_stamp',
  /** column name */
  TwoFactorEnabled = 'two_factor_enabled',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Uuid = 'uuid'
}

/** input type for updating data in table "auth.users" */
export interface Users_Set_Input {
  created_at: InputMaybe<Scalars['timestamptz']>;
  email: InputMaybe<Scalars['String']>;
  email_confirmed: InputMaybe<Scalars['Boolean']>;
  last_login_at: InputMaybe<Scalars['timestamptz']>;
  locked_out: InputMaybe<Scalars['Boolean']>;
  locked_out_end: InputMaybe<Scalars['timestamptz']>;
  password_hash: InputMaybe<Scalars['String']>;
  phone_number: InputMaybe<Scalars['String']>;
  phone_number_confirmed: InputMaybe<Scalars['Boolean']>;
  roles: InputMaybe<Scalars['_text']>;
  security_stamp: InputMaybe<Scalars['String']>;
  two_factor_enabled: InputMaybe<Scalars['Boolean']>;
  updated_at: InputMaybe<Scalars['timestamptz']>;
  uuid: InputMaybe<Scalars['uuid']>;
}

/** Streaming cursor of the table "users" */
export interface Users_Stream_Cursor_Input {
  /** Stream column input with initial value */
  initial_value: Users_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering: InputMaybe<Cursor_Ordering>;
}

/** Initial value of the column from where the streaming should start */
export interface Users_Stream_Cursor_Value_Input {
  created_at: InputMaybe<Scalars['timestamptz']>;
  email: InputMaybe<Scalars['String']>;
  email_confirmed: InputMaybe<Scalars['Boolean']>;
  last_login_at: InputMaybe<Scalars['timestamptz']>;
  locked_out: InputMaybe<Scalars['Boolean']>;
  locked_out_end: InputMaybe<Scalars['timestamptz']>;
  password_hash: InputMaybe<Scalars['String']>;
  phone_number: InputMaybe<Scalars['String']>;
  phone_number_confirmed: InputMaybe<Scalars['Boolean']>;
  roles: InputMaybe<Scalars['_text']>;
  security_stamp: InputMaybe<Scalars['String']>;
  two_factor_enabled: InputMaybe<Scalars['Boolean']>;
  updated_at: InputMaybe<Scalars['timestamptz']>;
  uuid: InputMaybe<Scalars['uuid']>;
}

/** update columns of table "auth.users" */
export enum Users_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Email = 'email',
  /** column name */
  EmailConfirmed = 'email_confirmed',
  /** column name */
  LastLoginAt = 'last_login_at',
  /** column name */
  LockedOut = 'locked_out',
  /** column name */
  LockedOutEnd = 'locked_out_end',
  /** column name */
  PasswordHash = 'password_hash',
  /** column name */
  PhoneNumber = 'phone_number',
  /** column name */
  PhoneNumberConfirmed = 'phone_number_confirmed',
  /** column name */
  Roles = 'roles',
  /** column name */
  SecurityStamp = 'security_stamp',
  /** column name */
  TwoFactorEnabled = 'two_factor_enabled',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Uuid = 'uuid'
}

export interface Users_Updates {
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
