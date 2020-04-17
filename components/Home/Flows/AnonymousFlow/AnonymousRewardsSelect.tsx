import React from 'react'
import { gql, useMutation, useQuery } from '@apollo/client'

import { RewardsList } from '../Rewards/RewardsList'
import { RewardsQuery } from '../../../../lib/generated/graphql'
import {
  ANONYMOUS_COMMITMENTS,
  ANONYMOUS_USER_ID,
} from '../../../../lib/apollo/queries'

const UPDATE_ANONYMOUS_COMMITMENT = gql`
  mutation UpdateAnonymousCommitment($commitmentId: uuid!, $rewardId: uuid!) {
    update_anonymous_commitments(
      _set: { reward_id: $rewardId }
      where: { id: { _eq: $commitmentId } }
    ) {
      returning {
        id
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

export const AnonymousRewardsSelect = ({ rewards, commitmentId }: Props) => {
  const { data } = useQuery(ANONYMOUS_USER_ID)
  const [updateCommitment] = useMutation(UPDATE_ANONYMOUS_COMMITMENT, {
    update(
      cache,
      {
        data: {
          update_anonymous_commitments: {
            returning: [{ date_hash, reward }],
          },
        },
      }
    ) {
      const { anonymousUserId } = data
      const {
        anonymous_commitments: [todaysCommitment],
      } = cache.readQuery({
        query: ANONYMOUS_COMMITMENTS,
        variables: { anonymousUserId, dateHash: date_hash },
      })

      cache.writeQuery({
        query: ANONYMOUS_COMMITMENTS,
        variables: { anonymousUserId, dateHash: date_hash },
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

  return <RewardsList rewards={rewards} handleClick={handleClick} />
}
