const webpack = require('webpack')
const withCSS = require('@zeit/next-css')

const debug = process.env.NODE_ENV !== "production"

module.exports = withCSS({
  exportPathMap: function () {
    const ids = [
      'morphio',
      'dynablock',
      'tabby',
      'reactile',
      'pep',
      'flux-marker',
      'trace-diff',
      'mixed-initiative',
      'refazer',
      'atelier'
    ]

    let pages = {}
    for (let id of ids) {
      pages[id] = {
        page: 'project',
        query: { id: id }
      }
    }
    return Object.assign({}, pages, {
      '/': { page: '/' }
    })
  },
  assetPrefix: !debug ? '/homepage/' : '',
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
