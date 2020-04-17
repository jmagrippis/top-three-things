import React from 'react'
import { gql, useMutation } from '@apollo/client'

import { RewardsList } from '../Rewards/RewardsList'
import { RewardsQuery } from '../../../../lib/generated/graphql'
import { COMMITMENTS } from '../../../../lib/apollo/queries'

const UPDATE_COMMITMENT = gql`
  mutation UpdateCommitment($commitmentId: uuid!, $rewardId: uuid!) {
    update_commitments(
      _set: { reward_id: $rewardId }
      where: { id: { _eq: $commitmentId } }
    ) {
      returning {
        id
        user_id
        date_hash
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

export const RewardsSelect = ({ rewards, commitmentId }: Props) => {
  const [updateCommitment] = useMutation(UPDATE_COMMITMENT, {
    update(
      cache,
      {
        data: {
          update_commitments: {
            returning: [{ user_id, date_hash, reward }],
          },
        },
      }
    ) {
      const {
        commitments: [todaysCommitment],
      } = cache.readQuery({
        query: COMMITMENTS,
        variables: { userId: user_id, dateHash: date_hash },
      })

      cache.writeQuery({
        query: COMMITMENTS,
        variables: { userId: user_id, dateHash: date_hash },
        data: {
          commitments: [
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

  return <RewardsList rewards={rewards} handleClick={handleClick} />
}
