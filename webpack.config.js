const HtmlWebpackPlugin = require("html-webpack-plugin");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const webpack = require('webpack');
const config = {
    plugins: [
        new HtmlWebpackPlugin({
            title: "AJAX requests"
        }),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new UglifyJsPlugin()
    ],
    devtool: "source-map",
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
                loader: 'babel-loader',
            }
        }]
    },
    devServer: {
        contentBase: './dist',
        hot: true
    }
}
module.exports = config;