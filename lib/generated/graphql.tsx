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
  localThings: Array<LocalThings>
  /** fetch data from the table: "rewards" */
  rewards: Array<Rewards>
  /** fetch data from the table: "rewards" using primary key columns */
  rewards_by_pk?: Maybe<Rewards>
  /** fetch data from the table: "things" */
  things: Array<Things>
  /** fetch data from the table: "things" using primary key columns */
  things_by_pk?: Maybe<Things>
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

/** query root */
export type Query_RootThingsArgs = {
  distinct_on?: Maybe<Array<Things_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Things_Order_By>>
  where?: Maybe<Things_Bool_Exp>
}

/** query root */
export type Query_RootThings_By_PkArgs = {
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
  /** fetch data from the table: "rewards" */
  rewards: Array<Rewards>
  /** fetch data from the table: "rewards" using primary key columns */
  rewards_by_pk?: Maybe<Rewards>
  /** fetch data from the table: "things" */
  things: Array<Things>
  /** fetch data from the table: "things" using primary key columns */
  things_by_pk?: Maybe<Things>
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

/** subscription root */
export type Subscription_RootThingsArgs = {
  distinct_on?: Maybe<Array<Things_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Things_Order_By>>
  where?: Maybe<Things_Bool_Exp>
}

/** subscription root */
export type Subscription_RootThings_By_PkArgs = {
  id: Scalars['uuid']
}

/** columns and relationships of "things" */
export type Things = {
  __typename?: 'things'
  created_at: Scalars['timestamptz']
  description?: Maybe<Scalars['String']>
  done: Scalars['Boolean']
  id: Scalars['uuid']
  name: Scalars['String']
  user_id: Scalars['String']
}

/** Boolean expression to filter rows from the table "things". All fields are combined with a logical 'AND'. */
export type Things_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Things_Bool_Exp>>>
  _not?: Maybe<Things_Bool_Exp>
  _or?: Maybe<Array<Maybe<Things_Bool_Exp>>>
  created_at?: Maybe<Timestamptz_Comparison_Exp>
  description?: Maybe<String_Comparison_Exp>
  done?: Maybe<Boolean_Comparison_Exp>
  id?: Maybe<Uuid_Comparison_Exp>
  name?: Maybe<String_Comparison_Exp>
  user_id?: Maybe<String_Comparison_Exp>
}

/** ordering options when selecting data from "things" */
export type Things_Order_By = {
  created_at?: Maybe<Order_By>
  description?: Maybe<Order_By>
  done?: Maybe<Order_By>
  id?: Maybe<Order_By>
  name?: Maybe<Order_By>
  user_id?: Maybe<Order_By>
}

/** select columns of table "things" */
export enum Things_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  Done = 'done',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UserId = 'user_id',
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

export type LocalThings = {
  __typename?: 'LocalThings'
  id: Scalars['Int']
  name: Scalars['String']
  done: Scalars['Boolean']
  description?: Maybe<Scalars['String']>
}

export type Mutation = {
  __typename?: 'Mutation'
  addLocalThing?: Maybe<LocalThings>
}

export type MutationAddLocalThingArgs = {
  name: Scalars['String']
}

export type AddThingMutationVariables = {
  name: Scalars['String']
}

export type AddThingMutation = { __typename?: 'Mutation' } & {
  addLocalThing?: Maybe<
    { __typename?: 'LocalThings' } & Pick<LocalThings, 'id'>
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

export type ThingsQueryVariables = {}

export type ThingsQuery = { __typename?: 'query_root' } & {
  things: Array<{ __typename?: 'things' } & Pick<Things, 'id' | 'name'>>
}

export type LocalThingsQueryVariables = {}

export type LocalThingsQuery = { __typename?: 'query_root' } & {
  localThings: Array<
    { __typename?: 'LocalThings' } & Pick<
      LocalThings,
      'id' | 'name' | 'description' | 'done'
    >
  >
}

export const AddThingDocument = gql`
  mutation AddThing($name: String!) {
    addLocalThing(name: $name) @client {
      id
    }
  }
`
export type AddThingMutationFn = ApolloReactCommon.MutationFunction<
  AddThingMutation,
  AddThingMutationVariables
>
export type AddThingComponentProps = Omit<
  ApolloReactComponents.MutationComponentOptions<
    AddThingMutation,
    AddThingMutationVariables
  >,
  'mutation'
>

export const AddThingComponent = (props: AddThingComponentProps) => (
  <ApolloReactComponents.Mutation<AddThingMutation, AddThingMutationVariables>
    mutation={AddThingDocument}
    {...props}
  />
)

export type AddThingProps<
  TChildProps = {},
  TDataName extends string = 'mutate'
> = {
  [key in TDataName]: ApolloReactCommon.MutationFunction<
    AddThingMutation,
    AddThingMutationVariables
  >
} &
  TChildProps
export function withAddThing<
  TProps,
  TChildProps = {},
  TDataName extends string = 'mutate'
>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    AddThingMutation,
    AddThingMutationVariables,
    AddThingProps<TChildProps, TDataName>
  >
) {
  return ApolloReactHoc.withMutation<
    TProps,
    AddThingMutation,
    AddThingMutationVariables,
    AddThingProps<TChildProps, TDataName>
  >(AddThingDocument, {
    alias: 'addThing',
    ...operationOptions,
  })
}
export type AddThingMutationResult = ApolloReactCommon.MutationResult<
  AddThingMutation
>
export type AddThingMutationOptions = ApolloReactCommon.BaseMutationOptions<
  AddThingMutation,
  AddThingMutationVariables
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
export const ThingsDocument = gql`
  query Things {
    things {
      id
      name
    }
  }
`
export type ThingsComponentProps = Omit<
  ApolloReactComponents.QueryComponentOptions<
    ThingsQuery,
    ThingsQueryVariables
  >,
  'query'
>

export const ThingsComponent = (props: ThingsComponentProps) => (
  <ApolloReactComponents.Query<ThingsQuery, ThingsQueryVariables>
    query={ThingsDocument}
    {...props}
  />
)

export type ThingsProps<TChildProps = {}, TDataName extends string = 'data'> = {
  [key in TDataName]: ApolloReactHoc.DataValue<
    ThingsQuery,
    ThingsQueryVariables
  >
} &
  TChildProps
export function withThings<
  TProps,
  TChildProps = {},
  TDataName extends string = 'data'
>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    ThingsQuery,
    ThingsQueryVariables,
    ThingsProps<TChildProps, TDataName>
  >
) {
  return ApolloReactHoc.withQuery<
    TProps,
    ThingsQuery,
    ThingsQueryVariables,
    ThingsProps<TChildProps, TDataName>
  >(ThingsDocument, {
    alias: 'things',
    ...operationOptions,
  })
}
export type ThingsQueryResult = ApolloReactCommon.QueryResult<
  ThingsQuery,
  ThingsQueryVariables
>
export const LocalThingsDocument = gql`
  query LocalThings {
    localThings @client {
      id
      name
      description
      done
    }
  }
`
export type LocalThingsComponentProps = Omit<
  ApolloReactComponents.QueryComponentOptions<
    LocalThingsQuery,
    LocalThingsQueryVariables
  >,
  'query'
>

export const LocalThingsComponent = (props: LocalThingsComponentProps) => (
  <ApolloReactComponents.Query<LocalThingsQuery, LocalThingsQueryVariables>
    query={LocalThingsDocument}
    {...props}
  />
)

export type LocalThingsProps<
  TChildProps = {},
  TDataName extends string = 'data'
> = {
  [key in TDataName]: ApolloReactHoc.DataValue<
    LocalThingsQuery,
    LocalThingsQueryVariables
  >
} &
  TChildProps
export function withLocalThings<
  TProps,
  TChildProps = {},
  TDataName extends string = 'data'
>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    LocalThingsQuery,
    LocalThingsQueryVariables,
    LocalThingsProps<TChildProps, TDataName>
  >
) {
  return ApolloReactHoc.withQuery<
    TProps,
    LocalThingsQuery,
    LocalThingsQueryVariables,
    LocalThingsProps<TChildProps, TDataName>
  >(LocalThingsDocument, {
    alias: 'localThings',
    ...operationOptions,
  })
}
export type LocalThingsQueryResult = ApolloReactCommon.QueryResult<
  LocalThingsQuery,
  LocalThingsQueryVariables
>
