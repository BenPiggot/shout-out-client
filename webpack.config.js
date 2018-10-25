const path = require('path')

module.exports = {
  entry: ['whatwg-fetch', 'babel-polyfill', './index.tsx'],
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js'
  },
  devServer: {
    publicPath: '/dist',
    historyApiFallback: true,
    contentBase: './'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-1'],
        }
      },
      // {
      //   test: /\.s?css$/,
      //   loader: 'style-loader!css-loader!sass-loader'
      // },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: 'ts-loader'
      }
    ]
  }
}
