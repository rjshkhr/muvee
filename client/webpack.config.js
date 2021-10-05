const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')

const mode = process.env.NODE_ENV || 'development'

const config = {
  mode,
  devtool: mode === 'development' ? 'cheap-module-source-map' : 'source-map',
  entry: path.resolve(__dirname, 'src/index.jsx'),
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[contenthash].bundle.js',
    assetModuleFilename: '[name][ext]',
    clean: true
  },
  resolve: {
    extensions: ['.jsx', '.js']
  },
  devServer:
    mode === 'development'
      ? {
          open: true,
          port: 3000,
          hot: true,
          proxy: {
            '/api': 'http://localhost:3001'
          }
        }
      : {},
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/index.html')
    })
  ],
  module: {
    rules: [
      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
        type: 'asset'
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  }
}

module.exports = () => {
  mode === 'development' && config.plugins.push(new ReactRefreshWebpackPlugin())
  return config
}
