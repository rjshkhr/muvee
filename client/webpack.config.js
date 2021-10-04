const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const mode = process.env.NODE_ENV

const config = {
  mode,
  devtool: mode === 'development' ? 'cheap-module-source-map' : 'source-map',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[contenthash].bundle.js',
    assetModuleFilename: '[name][ext]',
    clean: true
  },
  devServer:
    mode === 'development'
      ? {
          open: true,
          port: 3000,
          hot: true
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
      }
    ]
  }
}

module.exports = config
