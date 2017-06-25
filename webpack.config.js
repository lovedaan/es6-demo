/*
 * @Author: Marte
 * @Date:   2017-06-25 09:14:55
 * @Last Modified by:   Marte
 * @Last Modified time: 2017-06-25 09:36:09
 */

'use strict';

const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        main: './src/main.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist/'),
        filename: 'js/[name].js'
    },
    module: {
        rules: [{
            test: /\.js$/,
            include: [
                path.resolve(__dirname, "src/")
            ],
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['es2015']
                }
            }
        }]
    },
    plugins: [
        new htmlWebpackPlugin({
            template: 'index.html',
            filename: 'index.html',
            inject: 'body',
            minify: {
                collapseWhitespace: true,
                minifyCSS: true,
                minifyJS: true
            }
        })
    ],
    devServer: {
        contentBase: path.resolve(__dirname, '/dist'),
        port: 9000, //设置端口号；
        compress: true, //设置gzip压缩;
        hot: true
    }
}