import { NextApiRequest, NextApiResponse } from 'next'

import auth0 from '../../lib/auth0'

const tokenHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const tokenCache = auth0.tokenCache(req, res)
    const { accessToken } = await tokenCache.getAccessToken()
    res.end(accessToken)
  } catch (error) {
    if (error.name === 'AccessTokenError') {
      return res.status(401).end(error.message)
    }

    console.error(error)
    res.status(error.status || 500).end(error.message)
  }
}

export default tokenHandler
