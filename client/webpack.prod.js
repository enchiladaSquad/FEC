// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');

module.exports = {
  entry: './src/index.jsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
    new MiniCssExtractPlugin(),
    new webpack.ProvidePlugin({ process: 'process' }),
  ],
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.(js|jsx)?$/i,
        loader: 'babel-loader',
        exclude: '/node_modules/',
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
        exclude: '/node_modules/',
      },
      {
        test: /\.s[ac]ss$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
        exclude: '/node_modules/',
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
        type: 'asset',
      },
    ],
  },
  resolve: {
    alias: {
      src: path.join(__dirname, 'src'),
      components: path.join(__dirname, 'src', 'components'),
      data: path.join(__dirname, '..', '..', '..', 'server', 'data'),
      modules: path.join(__dirname, '..', '..', 'node_modules'),
      server: path.join(__dirname, '..', '..', '..', 'server'),
      react: path.resolve(__dirname, '..', 'node_modules', 'react'),
    },
    extensions: ['.js', '.jsx'], // * This cancels requirement for file extensions
  },
};
