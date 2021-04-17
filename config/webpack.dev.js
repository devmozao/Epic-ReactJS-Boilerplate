const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const htmlWebpackConfig = new HtmlWebpackPlugin({
  template: './public/index.html'
});


const devConfig = {
  mode: 'development',
  devServer: {
    port: 8080,
    historyApiFallback: {
      index: 'index.html'
    }
  },
  plugins: [
    htmlWebpackConfig
  ]
};

module.exports = merge(commonConfig, devConfig);
