const webpack = require('webpack')
const withCSS = require('@zeit/next-css')

const debug = process.env.NODE_ENV !== "production"

module.exports = withCSS({
  distDir: process.env.NEXT_DIST_DIR || '.next',
  exportPathMap: function () {
    const ids = [
      'cinemaworld',
      'map2video',
      'carvid',
      'editing-reality',
      'tingletouch',
      'humanoidturk',
      'challenges-collaboration',
      'mapstory',
      'guided-reality',
      'realitysummary',
      'video2mr',
      'augmented-physics',
      'shape-it',
      'inflatablebots',
      'collagevis',
      'thermopixels',
      'robovisar',
      'augmented-math',
      'realitycanvas',
      'holobots',
      'physica',
      'chameleon-control',
      'teachable-reality',
      'expandable-robots',
      'sketched-reality',
      'realitytalk',
      'hapticbots',
      'realitysketch',
      'pufferbot',
      'roomshift',
      'lift-tiles',
      'shapebots',
      'morphio',
      'dynablock',
      'tabby',
      'reactile',
      'pep',
      'flux-marker',
      'trace-diff',
      'mixed-initiative',
      'refazer',
      'atelier',
      'phd-thesis'
    ]

    let pages = {}
    for (let id of ids) {
      pages[id] = {
        page: '/project',
        query: { id: id }
      }
    }
    return Object.assign({}, pages, {
      '/': { page: '/' },
      '/students': { page: '/students' },
      '/privacy': { page: '/privacy' }
    })
  },
  // The site is published at the domain root. An optional prefix is retained
  // for one-off mirrors, but production previews and ryosuzuki.org must not
  // request bundles from the obsolete /gh-pages path.
  assetPrefix: process.env.NEXT_ASSET_PREFIX || '',
  webpack: (config, options) => {
    config.plugins.push(
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery'
      })
    )
    return config
  }

})
