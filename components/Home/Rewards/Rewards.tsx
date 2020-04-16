import React from 'react'
import { useQuery, gql } from '@apollo/client'

import { RewardsList } from './RewardsList'
import { RewardsQuery } from '../../../lib/generated/graphql'

const REWARDS = gql`
  query Rewards {
    rewards {
      id
      name
      icon
      description
    }
  }
`

type Props = {
  commitmentId: string
}

export const Rewards = ({ commitmentId }: Props) => {
  const { loading, error, data } = useQuery<RewardsQuery>(REWARDS)

  if (loading) return <p>Loading rewards...</p>
  if (error) {
    console.log(error)
    return <p>Error loading rewards :(</p>
  }

  return <RewardsList rewards={data.rewards} commitmentId={commitmentId} />
}
