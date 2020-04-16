import React from 'react'
import dynamic from 'next/dynamic'
import { gql, useMutation } from '@apollo/client'

import { RewardsQuery } from '../../../../lib/generated/graphql'

const UPDATE_ANONYMOUS_COMMITMENT = gql`
  mutation UpdateAnonymousCommitment($commitmentId: uuid!, $rewardId: uuid!) {
    update_anonymous_commitments(
      _set: { reward_id: $rewardId }
      where: { id: { _eq: $commitmentId } }
    ) {
      returning {
        id
      }
    }
  }
`

const iconToComponent = {
  'binge-watch': dynamic(() => import('./binge-watch.svg')),
  book: dynamic(() => import('./book.svg')),
  music: dynamic(() => import('./music.svg')),
  shop: dynamic(() => import('./shop.svg')),
}

type Props = {
  reward: RewardsQuery['rewards'][0]
  commitmentId: string
}

export const Reward = ({ reward, commitmentId }: Props) => {
  const [addCommitment] = useMutation(UPDATE_ANONYMOUS_COMMITMENT)

  const onClick = () => {
    addCommitment({
      variables: {
        commitmentId,
        rewardId: reward.id,
      },
    })
  }
  const Icon = iconToComponent[reward.icon]
  return (
    <li
      onClick={onClick}
      className="flex flex-col items-center bg-red-100 rounded p-4 cursor-pointer shadow-md hover:bg-red-200 hover:shadow-lg transition duration-300"
    >
      {Icon && <Icon className="w-16 text-orange-500 mb-2" />}
      <h3 className="text-xl font-semibold mb-2">{reward.name}</h3>
      <div className="flex-grow">{reward.description}</div>
    </li>
  )
}
