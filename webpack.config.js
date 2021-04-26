const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
    entry: {
        main: path.resolve(__dirname, './src/app.js'),
      },
      output: {
        filename: 'index.bundle.js',
        path: path.resolve(__dirname, 'dist')
      },
      devServer: {
        contentBase: './dist',
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
                options: {
                  name: '[name].[ext]',
                  outputPath: './src/img/'
                }
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
            title: "BallooNadav",
        }),
        new CleanWebpackPlugin(),
        new CopyWebpackPlugin({ 
          patterns: [
            { from: 'src/img/', to: 'src/img/' },
          ]
        }
      )
    ],
};