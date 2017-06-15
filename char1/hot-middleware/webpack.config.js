/**
 * Created by vajoylarn on 2017/6/13.
 */
const path = require('path');
const webpack = require('webpack');
module.exports = {
    entry: ['webpack-hot-middleware/client', './app.js'],
    output: {
        publicPath: "/assets/",
        filename: 'bundle.js',
        //path: '/'   //只使用 dev-middleware 可以忽略本属性
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()   //出错时只打印错误，但不重新加载页面
    ]
};