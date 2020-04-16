import React, { useState } from 'react'
import { sampleSize } from 'lodash'

import { RewardsQuery } from '../../../lib/generated/graphql'
import { Reward } from './Reward/Reward'

type Props = {
  rewards: RewardsQuery['rewards']
  commitmentId: string
}

export const RewardsList = ({ rewards, commitmentId }: Props) => {
  const [possibleRewards] = useState(sampleSize(rewards, 3))

  return (
    <ul className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      {possibleRewards.map((reward) => (
        <Reward key={reward.id} reward={reward} commitmentId={commitmentId} />
      ))}
    </ul>
  )
}
