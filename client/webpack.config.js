// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const isProduction = process.env.NODE_ENV == 'production';

const stylesHandler = isProduction
  ? MiniCssExtractPlugin.loader
  : 'style-loader';

const config = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
  },
  // devServer: {
  //   contentBase: path.join(__dirname, 'dist'),
  //   compress: true,
  //   port: 9000,
  // },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),

    // Add your plugins here
    // Learn more about plugins from https://webpack.js.org/configuration/plugins/
  ],
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/i,
        loader: 'babel-loader',
        exclude: '/node_modules/',
      },
      {
        test: /\.css$/i,
        use: [stylesHandler, 'css-loader'],
        exclude: '/node_modules/',
      },
      {
        test: /\.s[ac]ss$/i,
        use: [stylesHandler, 'css-loader', 'sass-loader'],
        exclude: '/node_modules/',
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
        type: 'asset',
      },

      // Add your rules for custom modules here
      // Learn more about loaders from https://webpack.js.org/loaders/
    ],
  },
  resolve: {
    alias: {
      src: path.resolve(__dirname, 'src/'),
      components: path.resolve(__dirname, 'src/components'),
      data: path.resolve(__dirname, 'data/'),
      modules: path.resolve(__dirname, '../../node_modules/'),
      // utils: path.resolve(__dirname, 'utils.js'),
    },
  },
};

module.exports = () => {
  if (isProduction) {
    config.mode = 'production';

    config.plugins.push(new MiniCssExtractPlugin());
  } else {
    config.mode = 'development';
  }
  return config;
};
