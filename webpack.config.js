const path = require('path')
module.exports = {
    devtool: 'source-map',
    entry:  './src/index.js',
    output: {
      path: __dirname + '/dist',
      publicPath: '/dist/',
      filename: 'bundle.js'
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: ['babel-loader', 'eslint-loader']
        },
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader"]
        }
      ]
    },
    resolve: {
      extensions: ['.js', '.jsx']
    },
    devServer: {
      port: 8081,
      historyApiFallback: true
    }
  }

