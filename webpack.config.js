const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const devMode = process.env.NODE_ENV !== "production";

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
    assetModuleFilename: 'assets/[name][ext]',
    clean: true,
    publicPath: 'auto',
  },
  // optimization: {
  //   minimize: true,
  //   minimizer: [
  //     new TerserPlugin(),
  //   ],
  // },
  devtool: 'inline-source-map',
  devServer: {
    static: './dist',
    // static: {
    //   directory: path.join(__dirname, "dist"),
    // },
    hot: true,
    open: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      // template: './src/index.html'
      template: require('html-webpack-template'),
      title: 'Jewelry Shop',
      appMountId: 'root',
      lang: 'ru-RU',
      favicon: 'favicon.ico',
      filename: 'index.html',
    }),
    new MiniCssExtractPlugin({
      filename: '[name].bundle.css',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.css$/,
        use: [
          // devMode ? "style-loader" : MiniCssExtractPlugin.loader, //???????????
          MiniCssExtractPlugin.loader,
          'css-loader',
        ],
      },
      {
        test: /\.(jpg|jpeg|png|svg|gif|ico)$/,
        type: 'asset/resource',
      },
      {
        test: /\.(woff|woff2|ttf|eot)$/,
        type: 'asset/resource',
      },
    ],
  },

};
