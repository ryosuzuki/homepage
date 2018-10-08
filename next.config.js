const webpack = require('webpack')
const withCSS = require('@zeit/next-css')

module.exports = withCSS({
  webpack(config, options) {
    config.plugins.push(
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery'
      })
    )
    return config
  }

})
