/**
 * Created by vajoylarn on 2017/6/13.
 */
const path = require('path');
const webpack = require('webpack');
module.exports = {
    entry: './app.js',
    output: {
        publicPath: "/assets/",
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: path.join(__dirname, "src/html"),
        port: 3333,
        hot: true
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
};