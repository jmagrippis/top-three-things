import React from 'react'
import dynamic from 'next/dynamic'

import { RewardsQuery } from '../../../../lib/generated/graphql'

const iconToComponent = {
  'binge-watch': dynamic(() => import('./binge-watch.svg')),
  book: dynamic(() => import('./book.svg')),
  music: dynamic(() => import('./music.svg')),
  shop: dynamic(() => import('./shop.svg')),
}

type Props = {
  reward: RewardsQuery['rewards'][0]
}

export const Reward = ({ reward }: Props) => {
  const Icon = iconToComponent[reward.icon]
  return (
    <li className="flex flex-col items-center bg-red-100 rounded p-4 cursor-pointer shadow-md hover:bg-red-200 hover:shadow-lg transition duration-300">
      {Icon && <Icon className="w-16 text-orange-500 mb-2" />}
      <h3 className="text-xl font-semibold mb-2">{reward.name}</h3>
      <div className="flex-grow">{reward.description}</div>
    </li>
  )
}
