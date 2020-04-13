const isServerSide = typeof window === 'undefined'

const clientSideConfig = {
  scope: 'openid profile',
  clientId: process.env.AUTH0_CLIENT_ID,
  domain: process.env.AUTH0_DOMAIN,
  redirectUri: process.env.REDIRECT_URI,
  postLogoutRedirectUri: process.env.POST_LOGOUT_REDIRECT_URI,
}

export const auth0Config = isServerSide
  ? {
      ...clientSideConfig,
      clientSecret: process.env.AUTH0_CLIENT_SECRET,
      session: {
        cookieSecret: process.env.SESSION_COOKIE_SECRET,
        cookieLifetime: parseInt(process.env.SESSION_COOKIE_LIFETIME),
      },
    }
  : clientSideConfig
