/**
 * webpack.config.js 是运行在 node 环境的，所以可以使用任何 node 模块，如
 * path
 */

const path = require('path')

module.exports = {
  // 指定入口文件
  entry: './src/index.js',
  // 指定编辑后的出口文件
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.js'
  },
  // 配置 loader
  module: {
    rules: [{
      // 需要处理的文件类型
      test: /\.css$/,
      use: [
        // 将 css 转换成 js
        'style-loader',
        // 主要处理 css 中的依赖，如 @import, url() 等
        'css-loader'
      ]
    }]
  }
}
