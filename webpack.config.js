const HtmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const path = require('path')

module.exports = {
    entry: path.resolve(__dirname, 'src/index.js'),
    output:
    {
        filename: 'bundle.[contenthash].js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins:
    [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src/index.html'),
            minify: true
        }),
        new CleanWebpackPlugin({
            cleanAfterEveryBuildPatterns: ['dist']
        })
    ],
    module: {
        rules: [
            // html loader
            {
                test: /\.(html)$/,
                use: [
                    {
                        loader: "html-loader",
                        // options: {minimize: true}
                    }
                ]
            },
            // sass loader
            {
                test: /\.s[ac]ss$/i,
                use: [
                  "style-loader",
                  "css-loader",
                  "sass-loader",
                ],
            },
            // Javascript
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use:
                [
                    'babel-loader'
                ]
            },
            // Images
            {

                test: /\.(png|svg|jpg|jpeg|gif)$/i,
        
                type: 'asset/resource',
        
              },
        ]
    },
    mode: "production",
    devServer: {
        static: {
          directory: path.join(__dirname, 'src'),
        },
        compress: true,
        port: 9000,
        allowedHosts: [
            '.trycloudflare.com'
        ]
      },
}