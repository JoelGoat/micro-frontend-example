const { defineConfig } = require('@vue/cli-service')
const webpack = require('webpack')

module.exports = defineConfig({
  pages: {
    index: {
      entry: './src/index.js',
    },
  },
  configureWebpack: {
    plugins: [
      new webpack.container.ModuleFederationPlugin({
        name: 'host_app',
        filename: 'remoteEntry.js',
        remotes: {
          remote_app1: 'remote_app1@http://localhost:3001/remoteEntry.js',
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
