const { defineConfig } = require('@vue/cli-service')
const packageName = 'app2';
module.exports = defineConfig({
  publicPath: '//localhost:8082/',
  transpileDependencies: true,
  lintOnSave: false,
  devServer: {
    port: 8082,
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  },
  configureWebpack: {
    output: {
      library: `${packageName}`,
      libraryTarget: 'umd',
    }
  }
})
