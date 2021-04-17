const babelConfig = {
  test: /\.m?js$/,
  exclude: /node_modules/,
  use: {
    loader: 'babel-loader',
    options: {
      presets: [
        ['@babel/preset-react', { 'runtime': 'automatic' }],
        '@babel/preset-env'
      ],
      plugins: ['@babel/plugin-transform-runtime']
    }
  }
};
  
module.exports = {
  module: {
    rules: [
      babelConfig,
    ]
  }
};
