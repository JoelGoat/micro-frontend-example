const { defineConfig } = require('@vue/cli-service')
const webpack = require('webpack')

module.exports = defineConfig({
  pages: {
    index: {
      entry: './src/index.js',
    },
  },
  publicPath: 'auto',
  configureWebpack: {
    optimization: {
      splitChunks: false,
    },
    plugins: [
      new webpack.container.ModuleFederationPlugin({
        name: 'remote_app1',
        filename: 'remoteEntry.js',
        exposes: {
          './RemoteApp.vue': './src/components/RemoteApp.vue',
        },
        shared: {
          vue: {
            singleton: true,
          },
        },
      }),
    ],
  },
  transpileDependencies: true,
})
