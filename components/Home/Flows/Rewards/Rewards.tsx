import React, { useState } from 'react'
import { useQuery, gql } from '@apollo/client'
import { sampleSize } from 'lodash'

import { AnonymousRewardsSelect } from '../AnonymousFlow/AnonymousRewardsSelect'
import { RewardsSelect } from '../AuthenticatedFlow/RewardsSelect'
import { RewardsQuery } from '../../../../lib/generated/graphql'

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
  isAnonymous: boolean
}

export const Rewards = ({ commitmentId, isAnonymous }: Props) => {
  const [possibleRewards, setPossibleRewards] = useState(null)
  const { loading, error } = useQuery<RewardsQuery>(REWARDS, {
    onCompleted({ rewards }) {
      setPossibleRewards(sampleSize(rewards, 3))
    },
  })

  if (error) {
    console.log(error)
    return <p>Error loading rewards :(</p>
  }
  if (loading || !possibleRewards) return <p>Loading rewards...</p>

  return isAnonymous ? (
    <AnonymousRewardsSelect
      rewards={possibleRewards}
      commitmentId={commitmentId}
    />
  ) : (
    <RewardsSelect rewards={possibleRewards} commitmentId={commitmentId} />
  )
}
