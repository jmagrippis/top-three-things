import React from 'react'

import { iconToComponent } from './iconToComponent'
import { RewardsQuery } from '../../../../lib/generated/graphql'

type Props = {
  reward: RewardsQuery['rewards'][0]
  handleClick?: (rewardId: string) => void
}

export const PotentialReward = ({ reward, handleClick }: Props) => {
  const Icon = iconToComponent[reward.icon]

  return (
    <li
      onClick={() => handleClick(reward.id)}
      className="flex flex-col items-center bg-red-100 rounded p-4 transition duration-300 shadow-md cursor-pointer hover:bg-red-200 hover:shadow-lg"
    >
      {Icon && <Icon className="w-16 text-orange-500 mb-2" />}
      <h3 className="text-xl font-semibold mb-2">{reward.name}</h3>
      <div className="flex-grow">{reward.description}</div>
    </li>
  )
}
