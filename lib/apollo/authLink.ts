import { ServerError, ServerParseError } from '@apollo/client'
import { setContext } from '@apollo/link-context'
import { onError } from '@apollo/link-error'

import { fetchToken } from '../token'

// cached storage for the user token
let token: string
const withToken = setContext(async () => {
  if (!token) {
    await fetchToken().then((userToken) => {
      token = userToken
    })
  }

  return token
    ? {
        headers: {
          authorization: `Bearer ${token}`,
        },
      }
    : null
})

export const isServerError = (
  networkError: Error | ServerError | ServerParseError
): networkError is ServerError =>
  networkError && networkError.name === 'ServerError'

const resetToken = onError(({ networkError }) => {
  if (isServerError(networkError) && networkError.statusCode === 401) {
    token = null
  }
})

export const authLink = withToken.concat(resetToken)
