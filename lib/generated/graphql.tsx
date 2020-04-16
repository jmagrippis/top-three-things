import gql from 'graphql-tag'
import * as ApolloReactCommon from '@apollo/react-common'
import * as React from 'react'
import * as ApolloReactComponents from '@apollo/react-components'
import * as ApolloReactHoc from '@apollo/react-hoc'
export type Maybe<T> = T | null
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  timestamptz: any
  uuid: any
}

/** expression to compare columns of type Boolean. All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: Maybe<Scalars['Boolean']>
  _gt?: Maybe<Scalars['Boolean']>
  _gte?: Maybe<Scalars['Boolean']>
  _in?: Maybe<Array<Scalars['Boolean']>>
  _is_null?: Maybe<Scalars['Boolean']>
  _lt?: Maybe<Scalars['Boolean']>
  _lte?: Maybe<Scalars['Boolean']>
  _neq?: Maybe<Scalars['Boolean']>
  _nin?: Maybe<Array<Scalars['Boolean']>>
}

/** expression to compare columns of type String. All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: Maybe<Scalars['String']>
  _gt?: Maybe<Scalars['String']>
  _gte?: Maybe<Scalars['String']>
  _ilike?: Maybe<Scalars['String']>
  _in?: Maybe<Array<Scalars['String']>>
  _is_null?: Maybe<Scalars['Boolean']>
  _like?: Maybe<Scalars['String']>
  _lt?: Maybe<Scalars['String']>
  _lte?: Maybe<Scalars['String']>
  _neq?: Maybe<Scalars['String']>
  _nilike?: Maybe<Scalars['String']>
  _nin?: Maybe<Array<Scalars['String']>>
  _nlike?: Maybe<Scalars['String']>
  _nsimilar?: Maybe<Scalars['String']>
  _similar?: Maybe<Scalars['String']>
}

/** columns and relationships of "anonymous_things" */
export type Anonymous_Things = {
  __typename?: 'anonymous_things'
  anonymous_user_id: Scalars['uuid']
  created_at: Scalars['timestamptz']
  date_hash: Scalars['String']
  description?: Maybe<Scalars['String']>
  done: Scalars['Boolean']
  id: Scalars['uuid']
  name: Scalars['String']
}

/** input type for inserting array relation for remote table "anonymous_things" */
export type Anonymous_Things_Arr_Rel_Insert_Input = {
  data: Array<Anonymous_Things_Insert_Input>
  on_conflict?: Maybe<Anonymous_Things_On_Conflict>
}

/** Boolean expression to filter rows from the table "anonymous_things". All fields are combined with a logical 'AND'. */
export type Anonymous_Things_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Anonymous_Things_Bool_Exp>>>
  _not?: Maybe<Anonymous_Things_Bool_Exp>
  _or?: Maybe<Array<Maybe<Anonymous_Things_Bool_Exp>>>
  anonymous_user_id?: Maybe<Uuid_Comparison_Exp>
  created_at?: Maybe<Timestamptz_Comparison_Exp>
  date_hash?: Maybe<String_Comparison_Exp>
  description?: Maybe<String_Comparison_Exp>
  done?: Maybe<Boolean_Comparison_Exp>
  id?: Maybe<Uuid_Comparison_Exp>
  name?: Maybe<String_Comparison_Exp>
}

/** unique or primary key constraints on table "anonymous_things" */
export enum Anonymous_Things_Constraint {
  /** unique or primary key constraint */
  AnonymousThingsPkey = 'anonymous_things_pkey',
}

/** input type for inserting data into table "anonymous_things" */
export type Anonymous_Things_Insert_Input = {
  anonymous_user_id?: Maybe<Scalars['uuid']>
  date_hash?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['String']>
  done?: Maybe<Scalars['Boolean']>
  id?: Maybe<Scalars['uuid']>
  name?: Maybe<Scalars['String']>
}

/** response of any mutation on the table "anonymous_things" */
export type Anonymous_Things_Mutation_Response = {
  __typename?: 'anonymous_things_mutation_response'
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int']
  /** data of the affected rows by the mutation */
  returning: Array<Anonymous_Things>
}

/** input type for inserting object relation for remote table "anonymous_things" */
export type Anonymous_Things_Obj_Rel_Insert_Input = {
  data: Anonymous_Things_Insert_Input
  on_conflict?: Maybe<Anonymous_Things_On_Conflict>
}

/** on conflict condition type for table "anonymous_things" */
export type Anonymous_Things_On_Conflict = {
  constraint: Anonymous_Things_Constraint
  update_columns: Array<Anonymous_Things_Update_Column>
  where?: Maybe<Anonymous_Things_Bool_Exp>
}

/** ordering options when selecting data from "anonymous_things" */
export type Anonymous_Things_Order_By = {
  anonymous_user_id?: Maybe<Order_By>
  created_at?: Maybe<Order_By>
  date_hash?: Maybe<Order_By>
  description?: Maybe<Order_By>
  done?: Maybe<Order_By>
  id?: Maybe<Order_By>
  name?: Maybe<Order_By>
}

/** select columns of table "anonymous_things" */
export enum Anonymous_Things_Select_Column {
  /** column name */
  AnonymousUserId = 'anonymous_user_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DateHash = 'date_hash',
  /** column name */
  Description = 'description',
  /** column name */
  Done = 'done',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
}

/** input type for updating data in table "anonymous_things" */
export type Anonymous_Things_Set_Input = {
  date_hash?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['String']>
  done?: Maybe<Scalars['Boolean']>
  id?: Maybe<Scalars['uuid']>
  name?: Maybe<Scalars['String']>
}

/** update columns of table "anonymous_things" */
export enum Anonymous_Things_Update_Column {
  /** column name */
  DateHash = 'date_hash',
  /** column name */
  Description = 'description',
  /** column name */
  Done = 'done',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
}

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root'
  /** delete data from the table: "anonymous_things" */
  delete_anonymous_things?: Maybe<Anonymous_Things_Mutation_Response>
  /** insert data into the table: "anonymous_things" */
  insert_anonymous_things?: Maybe<Anonymous_Things_Mutation_Response>
  /** update data of the table: "anonymous_things" */
  update_anonymous_things?: Maybe<Anonymous_Things_Mutation_Response>
}

/** mutation root */
export type Mutation_RootDelete_Anonymous_ThingsArgs = {
  where: Anonymous_Things_Bool_Exp
}

/** mutation root */
export type Mutation_RootInsert_Anonymous_ThingsArgs = {
  objects: Array<Anonymous_Things_Insert_Input>
  on_conflict?: Maybe<Anonymous_Things_On_Conflict>
}

/** mutation root */
export type Mutation_RootUpdate_Anonymous_ThingsArgs = {
  _set?: Maybe<Anonymous_Things_Set_Input>
  where: Anonymous_Things_Bool_Exp
}

/** column ordering options */
export enum Order_By {
  /** in the ascending order, nulls last */
  Asc = 'asc',
  /** in the ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in the ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in the descending order, nulls first */
  Desc = 'desc',
  /** in the descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in the descending order, nulls last */
  DescNullsLast = 'desc_nulls_last',
}

/** query root */
export type Query_Root = {
  __typename?: 'query_root'
  anonymousUserId?: Maybe<Scalars['String']>
  /** fetch data from the table: "anonymous_things" */
  anonymous_things: Array<Anonymous_Things>
  /** fetch data from the table: "anonymous_things" using primary key columns */
  anonymous_things_by_pk?: Maybe<Anonymous_Things>
  /** fetch data from the table: "rewards" */
  rewards: Array<Rewards>
  /** fetch data from the table: "rewards" using primary key columns */
  rewards_by_pk?: Maybe<Rewards>
}

/** query root */
export type Query_RootAnonymous_ThingsArgs = {
  distinct_on?: Maybe<Array<Anonymous_Things_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Anonymous_Things_Order_By>>
  where?: Maybe<Anonymous_Things_Bool_Exp>
}

/** query root */
export type Query_RootAnonymous_Things_By_PkArgs = {
  id: Scalars['uuid']
}

/** query root */
export type Query_RootRewardsArgs = {
  distinct_on?: Maybe<Array<Rewards_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Rewards_Order_By>>
  where?: Maybe<Rewards_Bool_Exp>
}

/** query root */
export type Query_RootRewards_By_PkArgs = {
  id: Scalars['uuid']
}

/** columns and relationships of "rewards" */
export type Rewards = {
  __typename?: 'rewards'
  created_at: Scalars['timestamptz']
  description: Scalars['String']
  icon: Scalars['String']
  id: Scalars['uuid']
  name: Scalars['String']
}

/** Boolean expression to filter rows from the table "rewards". All fields are combined with a logical 'AND'. */
export type Rewards_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Rewards_Bool_Exp>>>
  _not?: Maybe<Rewards_Bool_Exp>
  _or?: Maybe<Array<Maybe<Rewards_Bool_Exp>>>
  created_at?: Maybe<Timestamptz_Comparison_Exp>
  description?: Maybe<String_Comparison_Exp>
  icon?: Maybe<String_Comparison_Exp>
  id?: Maybe<Uuid_Comparison_Exp>
  name?: Maybe<String_Comparison_Exp>
}

/** ordering options when selecting data from "rewards" */
export type Rewards_Order_By = {
  created_at?: Maybe<Order_By>
  description?: Maybe<Order_By>
  icon?: Maybe<Order_By>
  id?: Maybe<Order_By>
  name?: Maybe<Order_By>
}

/** select columns of table "rewards" */
export enum Rewards_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  Icon = 'icon',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
}

/** subscription root */
export type Subscription_Root = {
  __typename?: 'subscription_root'
  /** fetch data from the table: "anonymous_things" */
  anonymous_things: Array<Anonymous_Things>
  /** fetch data from the table: "anonymous_things" using primary key columns */
  anonymous_things_by_pk?: Maybe<Anonymous_Things>
  /** fetch data from the table: "rewards" */
  rewards: Array<Rewards>
  /** fetch data from the table: "rewards" using primary key columns */
  rewards_by_pk?: Maybe<Rewards>
}

/** subscription root */
export type Subscription_RootAnonymous_ThingsArgs = {
  distinct_on?: Maybe<Array<Anonymous_Things_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Anonymous_Things_Order_By>>
  where?: Maybe<Anonymous_Things_Bool_Exp>
}

/** subscription root */
export type Subscription_RootAnonymous_Things_By_PkArgs = {
  id: Scalars['uuid']
}

/** subscription root */
export type Subscription_RootRewardsArgs = {
  distinct_on?: Maybe<Array<Rewards_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Rewards_Order_By>>
  where?: Maybe<Rewards_Bool_Exp>
}

/** subscription root */
export type Subscription_RootRewards_By_PkArgs = {
  id: Scalars['uuid']
}

/** expression to compare columns of type timestamptz. All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: Maybe<Scalars['timestamptz']>
  _gt?: Maybe<Scalars['timestamptz']>
  _gte?: Maybe<Scalars['timestamptz']>
  _in?: Maybe<Array<Scalars['timestamptz']>>
  _is_null?: Maybe<Scalars['Boolean']>
  _lt?: Maybe<Scalars['timestamptz']>
  _lte?: Maybe<Scalars['timestamptz']>
  _neq?: Maybe<Scalars['timestamptz']>
  _nin?: Maybe<Array<Scalars['timestamptz']>>
}

/** expression to compare columns of type uuid. All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: Maybe<Scalars['uuid']>
  _gt?: Maybe<Scalars['uuid']>
  _gte?: Maybe<Scalars['uuid']>
  _in?: Maybe<Array<Scalars['uuid']>>
  _is_null?: Maybe<Scalars['Boolean']>
  _lt?: Maybe<Scalars['uuid']>
  _lte?: Maybe<Scalars['uuid']>
  _neq?: Maybe<Scalars['uuid']>
  _nin?: Maybe<Array<Scalars['uuid']>>
}

export type AddAnonymousThingMutationVariables = {
  name: Scalars['String']
  anonymousUserId: Scalars['uuid']
  dateHash: Scalars['String']
}

export type AddAnonymousThingMutation = { __typename?: 'mutation_root' } & {
  insert_anonymous_things?: Maybe<
    { __typename?: 'anonymous_things_mutation_response' } & {
      returning: Array<
        { __typename?: 'anonymous_things' } & Pick<
          Anonymous_Things,
          'id' | 'name' | 'done'
        >
      >
    }
  >
}

export type RewardsQueryVariables = {}

export type RewardsQuery = { __typename?: 'query_root' } & {
  rewards: Array<
    { __typename?: 'rewards' } & Pick<
      Rewards,
      'id' | 'name' | 'icon' | 'description'
    >
  >
}

export type AnonymousUserIdQueryVariables = {}

export type AnonymousUserIdQuery = { __typename?: 'query_root' } & Pick<
  Query_Root,
  'anonymousUserId'
>

export type AnonymousThingsQueryVariables = {
  anonymousUserId: Scalars['uuid']
  dateHash: Scalars['String']
}

export type AnonymousThingsQuery = { __typename?: 'query_root' } & {
  anonymous_things: Array<
    { __typename?: 'anonymous_things' } & Pick<
      Anonymous_Things,
      'id' | 'name' | 'done'
    >
  >
}

export const AddAnonymousThingDocument = gql`
  mutation AddAnonymousThing(
    $name: String!
    $anonymousUserId: uuid!
    $dateHash: String!
  ) {
    insert_anonymous_things(
      objects: {
        name: $name
        anonymous_user_id: $anonymousUserId
        date_hash: $dateHash
      }
    ) {
      returning {
        id
        name
        done
      }
    }
  }
`
export type AddAnonymousThingMutationFn = ApolloReactCommon.MutationFunction<
  AddAnonymousThingMutation,
  AddAnonymousThingMutationVariables
>
export type AddAnonymousThingComponentProps = Omit<
  ApolloReactComponents.MutationComponentOptions<
    AddAnonymousThingMutation,
    AddAnonymousThingMutationVariables
  >,
  'mutation'
>

export const AddAnonymousThingComponent = (
  props: AddAnonymousThingComponentProps
) => (
  <ApolloReactComponents.Mutation<
    AddAnonymousThingMutation,
    AddAnonymousThingMutationVariables
  >
    mutation={AddAnonymousThingDocument}
    {...props}
  />
)

export type AddAnonymousThingProps<
  TChildProps = {},
  TDataName extends string = 'mutate'
> = {
  [key in TDataName]: ApolloReactCommon.MutationFunction<
    AddAnonymousThingMutation,
    AddAnonymousThingMutationVariables
  >
} &
  TChildProps
export function withAddAnonymousThing<
  TProps,
  TChildProps = {},
  TDataName extends string = 'mutate'
>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    AddAnonymousThingMutation,
    AddAnonymousThingMutationVariables,
    AddAnonymousThingProps<TChildProps, TDataName>
  >
) {
  return ApolloReactHoc.withMutation<
    TProps,
    AddAnonymousThingMutation,
    AddAnonymousThingMutationVariables,
    AddAnonymousThingProps<TChildProps, TDataName>
  >(AddAnonymousThingDocument, {
    alias: 'addAnonymousThing',
    ...operationOptions,
  })
}
export type AddAnonymousThingMutationResult = ApolloReactCommon.MutationResult<
  AddAnonymousThingMutation
>
export type AddAnonymousThingMutationOptions = ApolloReactCommon.BaseMutationOptions<
  AddAnonymousThingMutation,
  AddAnonymousThingMutationVariables
>
export const RewardsDocument = gql`
  query Rewards {
    rewards {
      id
      name
      icon
      description
    }
  }
`
export type RewardsComponentProps = Omit<
  ApolloReactComponents.QueryComponentOptions<
    RewardsQuery,
    RewardsQueryVariables
  >,
  'query'
>

export const RewardsComponent = (props: RewardsComponentProps) => (
  <ApolloReactComponents.Query<RewardsQuery, RewardsQueryVariables>
    query={RewardsDocument}
    {...props}
  />
)

export type RewardsProps<
  TChildProps = {},
  TDataName extends string = 'data'
> = {
  [key in TDataName]: ApolloReactHoc.DataValue<
    RewardsQuery,
    RewardsQueryVariables
  >
} &
  TChildProps
export function withRewards<
  TProps,
  TChildProps = {},
  TDataName extends string = 'data'
>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    RewardsQuery,
    RewardsQueryVariables,
    RewardsProps<TChildProps, TDataName>
  >
) {
  return ApolloReactHoc.withQuery<
    TProps,
    RewardsQuery,
    RewardsQueryVariables,
    RewardsProps<TChildProps, TDataName>
  >(RewardsDocument, {
    alias: 'rewards',
    ...operationOptions,
  })
}
export type RewardsQueryResult = ApolloReactCommon.QueryResult<
  RewardsQuery,
  RewardsQueryVariables
>
export const AnonymousUserIdDocument = gql`
  query AnonymousUserId {
    anonymousUserId @client
  }
`
export type AnonymousUserIdComponentProps = Omit<
  ApolloReactComponents.QueryComponentOptions<
    AnonymousUserIdQuery,
    AnonymousUserIdQueryVariables
  >,
  'query'
>

export const AnonymousUserIdComponent = (
  props: AnonymousUserIdComponentProps
) => (
  <ApolloReactComponents.Query<
    AnonymousUserIdQuery,
    AnonymousUserIdQueryVariables
  >
    query={AnonymousUserIdDocument}
    {...props}
  />
)

export type AnonymousUserIdProps<
  TChildProps = {},
  TDataName extends string = 'data'
> = {
  [key in TDataName]: ApolloReactHoc.DataValue<
    AnonymousUserIdQuery,
    AnonymousUserIdQueryVariables
  >
} &
  TChildProps
export function withAnonymousUserId<
  TProps,
  TChildProps = {},
  TDataName extends string = 'data'
>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    AnonymousUserIdQuery,
    AnonymousUserIdQueryVariables,
    AnonymousUserIdProps<TChildProps, TDataName>
  >
) {
  return ApolloReactHoc.withQuery<
    TProps,
    AnonymousUserIdQuery,
    AnonymousUserIdQueryVariables,
    AnonymousUserIdProps<TChildProps, TDataName>
  >(AnonymousUserIdDocument, {
    alias: 'anonymousUserId',
    ...operationOptions,
  })
}
export type AnonymousUserIdQueryResult = ApolloReactCommon.QueryResult<
  AnonymousUserIdQuery,
  AnonymousUserIdQueryVariables
>
export const AnonymousThingsDocument = gql`
  query AnonymousThings($anonymousUserId: uuid!, $dateHash: String!) {
    anonymous_things(
      where: {
        anonymous_user_id: { _eq: $anonymousUserId }
        date_hash: { _eq: $dateHash }
      }
    ) {
      id
      name
      done
    }
  }
`
export type AnonymousThingsComponentProps = Omit<
  ApolloReactComponents.QueryComponentOptions<
    AnonymousThingsQuery,
    AnonymousThingsQueryVariables
  >,
  'query'
> &
  (
    | { variables: AnonymousThingsQueryVariables; skip?: boolean }
    | { skip: boolean }
  )

export const AnonymousThingsComponent = (
  props: AnonymousThingsComponentProps
) => (
  <ApolloReactComponents.Query<
    AnonymousThingsQuery,
    AnonymousThingsQueryVariables
  >
    query={AnonymousThingsDocument}
    {...props}
  />
)

export type AnonymousThingsProps<
  TChildProps = {},
  TDataName extends string = 'data'
> = {
  [key in TDataName]: ApolloReactHoc.DataValue<
    AnonymousThingsQuery,
    AnonymousThingsQueryVariables
  >
} &
  TChildProps
export function withAnonymousThings<
  TProps,
  TChildProps = {},
  TDataName extends string = 'data'
>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    AnonymousThingsQuery,
    AnonymousThingsQueryVariables,
    AnonymousThingsProps<TChildProps, TDataName>
  >
) {
  return ApolloReactHoc.withQuery<
    TProps,
    AnonymousThingsQuery,
    AnonymousThingsQueryVariables,
    AnonymousThingsProps<TChildProps, TDataName>
  >(AnonymousThingsDocument, {
    alias: 'anonymousThings',
    ...operationOptions,
  })
}
export type AnonymousThingsQueryResult = ApolloReactCommon.QueryResult<
  AnonymousThingsQuery,
  AnonymousThingsQueryVariables
>
