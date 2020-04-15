const withPlugins = require('next-compose-plugins')
const optimizedImages = require('next-optimized-images')
const svgr = require('next-svgr')

module.exports = withPlugins(
  [
    [
      optimizedImages,
      {
        handleImages: ['jpeg', 'png', 'webp', 'gif'],
      },
    ],
    svgr,
  ],
  {
    pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'mdx'],
    env: {
      AUTH0_DOMAIN: 'three-things.eu.auth0.com',
      AUTH0_CLIENT_ID: 'zNLI3ckF2llDWJEGDqkmNSkkHp6BabPr',
      REDIRECT_URI: 'https://topthreethings.com/api/callback',
      POST_LOGOUT_REDIRECT_URI: 'https://topthreethings.com',
      SESSION_COOKIE_LIFETIME: '7200',
    },
    publicRuntimeConfig: {
      graphqlEndpoint: 'https://top-three-things.herokuapp.com/v1/graphql',
    },
  }
)
