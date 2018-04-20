/**
 * webpack.config.js 是运行在 node 环境的，所以可以使用任何 node 模块，如
 * path
 */

const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  // 配置解析方式
  resolve: {
    extensions: ['.js', '.styl'],
    alias: {
      utils: path.resolve(__dirname, 'src/utils')
    }
  },
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
      test: /\.styl$/,
      use: ExtractTextPlugin.extract({
        // 将 css 转换成 js
        fallback: 'style-loader',
        // 主要处理 css 中的依赖，如 @import, url() 等
        use: [
          'css-loader',
          'stylus-loader'
        ]
      })
    }, {
      test: /\.(png|jpg|gif)$/,
      use: [
        {
          loader: 'file-loader',
          options: {}
        }
      ]
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html'
    }),
    new ExtractTextPlugin('index.css')
  ]
}
