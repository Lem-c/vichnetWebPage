const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: [
    'vuetify'
  ],
  // 基本路径
  outputDir: './dist',
  // 生产环境是否生成 sourceMap 文件
  productionSourceMap: false,
  // 服务器端口号
  devServer: {
    port: 8080,
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:5000',
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/api': 'api',
        },
      },
    },
  },
})