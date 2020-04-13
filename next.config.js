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
  { pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'mdx'] }
)
