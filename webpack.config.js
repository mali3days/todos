const htmlWebpackPlugin = require("html-webpack-plugin");
const config = {
    devtool: "source-map",
    module: {
        rules: [
            {
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
    plugins: [
        new htmlWebpackPlugin({
            title: "Todo List",
            template: "./src/template.ejs"
        })
    ]

}
module.exports = config;