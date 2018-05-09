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
        new UglifyJsPlugin({sourceMap: true})
    ],

    module: {
        rules: [{
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    devtool: "source-map",
    devServer: {
        contentBase: './dist',
        hot: true
    }
}
module.exports = config;