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
  }
}
