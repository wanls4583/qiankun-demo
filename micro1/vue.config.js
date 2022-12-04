const { defineConfig } = require('@vue/cli-service')
const packageName = 'app1';
module.exports = defineConfig({
  publicPath: '//localhost:8081/',
  transpileDependencies: true,
  lintOnSave: false,
  devServer: {
    port: 8081,
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
