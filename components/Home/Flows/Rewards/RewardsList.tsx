import React from 'react'

import { PotentialReward } from './Reward/PotentialReward'

type Props = {
  rewards: any
  handleClick: (rewardId: string) => void
}

export const RewardsList = ({ rewards, handleClick }: Props) => (
  <ul className="grid grid-cols-1 sm:grid-cols-3 gap-4">
    {rewards.map((reward) => (
      <PotentialReward
        key={reward.id}
        reward={reward}
        handleClick={handleClick}
      />
    ))}
  </ul>
)
