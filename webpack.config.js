const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ReactRefreshWebpackPlugin =  require('@pmmmwh/react-refresh-webpack-plugin')

const isDevelopment = process.env.NODE_ENV !== 'production';

/**
 * exportar objeto de configurações contendo
 * a propriedade entry, ou seja, o caminho do arquivo de entrada
 * e a propriedade output, ou seja, o caminho e o nome do arquivo de saída
 * no caso, o bundle.js
 */
module.exports = {
  mode: isDevelopment ? 'development' : 'production',
  devtool: isDevelopment ? 'eval-source-map' : 'source-map',
  entry: path.resolve(__dirname, 'src', 'index.tsx'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx','.ts', '.tsx']
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'public')
    },
    hot: true,
  },
  plugins: [
    /**
     * Devido a utilização do "&&" faz-se necessário utilizar-se de um
     * hack para evitar error quando retornar false que é utilizar o filter
     * no array
     */
    isDevelopment && new ReactRefreshWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public', 'index.html')
    })
  ].filter(Boolean),
  module: {
    rules: [
      {
        test: /\.(j|t)sx$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            plugins: [
              isDevelopment && require.resolve('react-refresh/babel')
            ].filter(Boolean)
          }
        },
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ]
  }
}