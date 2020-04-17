import React from 'react'

import { iconToComponent } from './iconToComponent'
import { RewardsQuery } from '../../../../lib/generated/graphql'

type Props = {
  reward: RewardsQuery['rewards'][0]
}

export const SelectedReward = ({ reward }: Props) => {
  const Icon = iconToComponent[reward.icon]

  return (
    <div className="flex flex-col sm:flex-row items-center justify-evenly bg-red-100 rounded p-4 shadow sm:text-left">
      {Icon && <Icon className="w-16 text-orange-500 flex-shrink-0 mr-4" />}
      <div>
        <h3 className="text-xl font-semibold">{reward.name}</h3>
        <div>{reward.description}</div>
      </div>
    </div>
  )
}
