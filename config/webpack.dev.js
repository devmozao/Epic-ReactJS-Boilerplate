const { merge } = require('webpack-merge')
const commonConfig = require('./webpack.common')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const DashboardPlugin = require('webpack-dashboard/plugin')

const htmlWebpackConfig = new HtmlWebpackPlugin({
  template: './public/index.html',
})
const dashBoardConfig = new DashboardPlugin()

const devConfig = {
  mode: 'development',
  devServer: {
    port: 8080,
    open: true,
    historyApiFallback: {
      index: 'index.html',
    },
  },
  plugins: [htmlWebpackConfig, dashBoardConfig],
}

module.exports = merge(commonConfig, devConfig)
