var path = require('path');
var webpack = require('webpack');

module.exports = {

    entry: './src/app.ts',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/dist'
    },
    module: {
        rules: [
            {
                enforce: 'pre',
                test: /\.tsx?$/,
                loader: 'tslint-loader',
                exclude: /node_modules/,
                options: {
                    failOnHint: true,
                    configuration: require('./tslint.json')
                }
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ],
                exclude: /node_modules/
            },
            {
                test: /\.(sass|scss)$/,
                use: [
                    {
                        loader: "style-loader" // creates style nodes from JS strings
                      },
                      {
                        loader: "css-loader" // translates CSS into CommonJS
                      },
                      {
                        loader: "sass-loader" // compiles Sass to CSS
                      }
                ],
                exclude: /node_modules/
            },
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"]
    },
    mode: 'development'
};