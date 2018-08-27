const path = require('path');
const Webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const {NODE_ENV} = process.env;

const rootDir = path.resolve(__dirname, '../../');
const isDevMode = NODE_ENV === 'development';
const indexTitle = `${isDevMode?`[${NODE_ENV.toUpperCase()}] `:''}React`;

module.exports = {
  entry: {
    app: ['./app'],
  },
  output: {
    path: path.resolve(rootDir, 'dist'),
    publicPath: '/',
  },
  resolve: {
    extensions: ['.js', '.css', '.scss'],
    alias: {
      RootDir: rootDir,
      CommonComponents: `${rootDir}/entry/common/components`,
    },
  },
  plugins: [
    new CleanWebpackPlugin(['dist', 'npm-debug.log', 'yarn-error.log'], {root: rootDir}),
    new HtmlWebpackPlugin({
      title: indexTitle,
      inject: 'head',
      favicon: `${rootDir}/vendor/images/favicon-180x180.png`,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
      },
      meta: {
        viewport: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0',
      },
    }),
    new Webpack.ProvidePlugin({
      React: 'react',
    }),
    new MiniCssExtractPlugin({
      filename: isDevMode?'[name].css':'[name].[hash].css',
      chunkFilename: isDevMode?'[id].css':'[id].[hash].css',
    }),
    new ScriptExtHtmlWebpackPlugin({
      preload: /\.js$/,
      defaultAttribute: 'async',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            envName: NODE_ENV,
            babelrc: false,
            presets: ['@babel/preset-react'],
            plugins: ['@babel/plugin-proposal-object-rest-spread'],
          },
        },
      },
      {
        test: /\.(sc|c)ss$/,
        use: [
          {
            loader: isDevMode?'style-loader':MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
            options: !isDevMode && {
              importLoaders: 2,
              minimize: {
                discardComments: {removeAll: true},
                minifyFontValues: {
                  removeAfterKeyword: true,
                  removeDuplicates: true,
                  removeQuotes: true,
                },
              },
            } || {},
          },
          {
            loader: 'postcss-loader',
            options: require(`${rootDir}/config/postcss/${NODE_ENV}.js`),
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
      {
        test: /\.(eot|ttf|woff|woff2)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: `[name].[ext]?${Date.now()}`,
            outputPath: './images',
          },
        },
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: `[name].[ext]?${Date.now()}`,
              outputPath: './images',
            },
          },
          {
            loader: 'image-webpack-loader',
            options: !isDevMode && {
              mozjpeg: {progressive: true, quality: 65},
              optipng: {enable: false},
              pngquant: {quality: '65-90', speed: 4},
              svgo: {options: {
                cleanupAttrs: true,
                removeComments: true,
              }},
            } || {},
          },
        ],
      },
    ],
  },
};
