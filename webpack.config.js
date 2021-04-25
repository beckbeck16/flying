const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    entry: {
        main: path.resolve(__dirname, './src/app.js'),
      },
      output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'deploy')
      },
      devServer: {
        contentBase: './deploy',
        open: true
      },
      module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env']
              }
            }
          },    { 
            test: /\.css$/, 
            use: ["style-loader", "css-loader"] 
          },
          {
            test: /\.(png|jpe?g|gif)$/i,
            use: [
              {
                loader: 'file-loader',
                // options: {
                //   name: '[name].[ext]',
                //   outputPath: 'img/'
                // }
              },
            ],
          },
          {
            test: /\.html$/i,
            loader: 'html-loader',
          },
        ]
      },
    plugins: [
        new HtmlWebpackPlugin({
            title: "Webpack Output",
        }),
        new CleanWebpackPlugin(),
        new CopyPlugin([ {from:'src/img/',
        // to:'img'
      } , ]),
    ],
};