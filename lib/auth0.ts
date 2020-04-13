import { initAuth0 } from '@auth0/nextjs-auth0'

import { auth0Config } from './config'

export default initAuth0(auth0Config)
