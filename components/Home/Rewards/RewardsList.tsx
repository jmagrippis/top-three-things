import React, { useState } from 'react'
import { gql, useMutation, useQuery } from '@apollo/client'
import { sampleSize } from 'lodash'

import { RewardsQuery } from '../../../lib/generated/graphql'
import { PotentialReward } from './Reward/PotentialReward'
import { getDateHash } from '../../../lib/getDateHash'
import {
  ANONYMOUS_COMMITMENTS,
  ANONYMOUS_USER_ID,
} from '../../../lib/apollo/queries'

const UPDATE_ANONYMOUS_COMMITMENT = gql`
  mutation UpdateAnonymousCommitment($commitmentId: uuid!, $rewardId: uuid!) {
    update_anonymous_commitments(
      _set: { reward_id: $rewardId }
      where: { id: { _eq: $commitmentId } }
    ) {
      returning {
        id
        reward {
          id
          name
          icon
          description
        }
      }
    }
  }
`

type Props = {
  rewards: RewardsQuery['rewards']
  commitmentId: string
}

export const RewardsList = ({ rewards, commitmentId }: Props) => {
  const { data } = useQuery(ANONYMOUS_USER_ID)
  const [possibleRewards] = useState(sampleSize(rewards, 3))
  const [updateCommitment] = useMutation(UPDATE_ANONYMOUS_COMMITMENT, {
    update(
      cache,
      {
        data: {
          update_anonymous_commitments: {
            returning: [{ reward }],
          },
        },
      }
    ) {
      const dateHash = getDateHash()
      const { anonymousUserId } = data
      const {
        anonymous_commitments: [todaysCommitment],
      } = cache.readQuery({
        query: ANONYMOUS_COMMITMENTS,
        variables: { anonymousUserId, dateHash },
      })

      cache.writeQuery({
        query: ANONYMOUS_COMMITMENTS,
        variables: { anonymousUserId, dateHash },
        data: {
          anonymous_commitments: [
            {
              ...todaysCommitment,
              reward,
            },
          ],
        },
      })
    },
  })

  const handleClick = (rewardId: string) => {
    updateCommitment({
      variables: {
        commitmentId,
        rewardId,
      },
    })
  }

  return (
    <ul className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      {possibleRewards.map((reward) => (
        <PotentialReward
          key={reward.id}
          reward={reward}
          handleClick={handleClick}
        />
      ))}
    </ul>
  )
}
