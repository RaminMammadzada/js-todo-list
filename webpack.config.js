// Webpack uses this to work with directories
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// This is the main configuration object.
// Here you write different options and tell Webpack what to do
module.exports = {

  // Path to your entry point. From this file Webpack will begin his work
  entry: './src/javascript/index.js',

  // Path and filename of your result bundle.
  // Webpack will bundle all JavaScript into this file
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: './bundle.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      hash: false,
      filename: './index.html',
    }),
    // new MiniCssExtractPlugin()
  ],
  module: {
    rules: [
      // {
      //   test: /\.js$/,
      //   exclude: /(node_modules)/,
      //   use: {
      //     loader: 'babel-loader',
      //     options: {
      //       presets: ['@babel/preset-env']
      //     }
      //   }
      // },
      {
        test: /\.css$/i,
        use: [
          // {
          //   loader: MiniCssExtractPlugin.loader,
          //   options: {
          //     publicPath: ''
          // },
          //  },
          { loader: 'style-loader' },
          { loader: 'css-loader' }],
      },
      {
        // Now we apply rule for images
        test: /\.(png|jpe?g|gif|svg)$/,
        use: [
          {
            // Using file-loader for these files
            loader: 'file-loader',

            // In options we can set different things like format
            // and directory to save
            options: {
              outputPath: 'images',
            },
          },
        ],
      },
      {
        // Apply rule for fonts files
        test: /\.(woff|woff2|ttf|otf|eot)$/,
        use: [
          {
            // Using file-loader too
            loader: 'file-loader',
            options: {
              outputPath: 'fonts',
            },
          },
        ],
      },
    ],
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 8083,
  },

  // Default mode for Webpack is production.
  // Depending on mode Webpack will apply different things
  // on final bundle. For now we don't need production's JavaScript
  // minifying and other thing so let's set mode to development
  mode: 'development',
};
