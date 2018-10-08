const webpack = require('webpack')
const withCSS = require('@zeit/next-css')

const debug = process.env.NODE_ENV !== "production";

module.exports = withCSS({
  exportPathMap: function () {
    return {
      "/": { page: "/" },
      "/about": { page: "/about" },
    }
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
