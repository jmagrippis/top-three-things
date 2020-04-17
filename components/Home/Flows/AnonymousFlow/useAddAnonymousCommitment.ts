import { useMutation, useApolloClient } from '@apollo/client'

import {
  ADD_ANONYMOUS_COMMITMENT_WITH_USER_ID,
  ADD_ANONYMOUS_COMMITMENT,
  ANONYMOUS_USER_ID,
} from '../../../../lib/apollo/queries'
import { getDateHash } from '../../../../lib/getDateHash'
import { setAnonymousUserId } from '../../../../lib/anonymousUserId'

export const useAddAnonymousCommitment = ({
  anonymousUserId,
  dateHash = getDateHash(),
}: {
  anonymousUserId: string | null
  dateHash?: string
}) => {
  const client = useApolloClient()

  const addCommitmentVariables = anonymousUserId
    ? {
        dateHash,
        anonymousUserId,
      }
    : { dateHash }
  const [addCommitment] = useMutation(
    anonymousUserId
      ? ADD_ANONYMOUS_COMMITMENT_WITH_USER_ID
      : ADD_ANONYMOUS_COMMITMENT,
    {
      refetchQueries: ['AnonymousCommitments'],
      variables: addCommitmentVariables,
      onCompleted({
        insert_anonymous_commitments: {
          returning: [{ anonymous_user_id }],
        },
      }) {
        if (anonymousUserId) return
        setAnonymousUserId(anonymous_user_id)
        client.writeQuery({
          query: ANONYMOUS_USER_ID,
          data: { anonymousUserId: anonymous_user_id },
        })
      },
    }
  )

  return addCommitment
}
