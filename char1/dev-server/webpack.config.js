/**
 * Created by vajoylarn on 2017/6/13.
 */
const path = require('path');
//const webpack = require('webpack');
module.exports = {
    entry: './app.js',
    output: {
        publicPath: "/assets/",
        filename: 'bundle.js',
        //path: '/'   //只使用 dev-server 可以忽略本属性
    },
    devServer: {
        contentBase: path.join(__dirname, "src/html"),
        compress: true,
        port: 3333
    }
};