const path = require('path')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

module.exports = {
        mode: 'production',
        entry: './src/main/build/bundle.js',
        output: {
                filename: 'bundle.js',
                path: path.join(__dirname, 'src', 'main', 'public')
        },
        module: {
                rules: [
                        {
                                test: /\.(js)$/,
                                exclude: /node_modules/,
                                use: ['babel-loader']
                        },
                        {
                                test: /\.scss$/,
                                use: [
                                        MiniCssExtractPlugin.loader,
                                        'css-loader',
                                        'sass-loader'
                                ]
                        }
                ]
        },
        plugins: [
                new MiniCssExtractPlugin({
                        filename: "bundle.css",
                }),
        ],
        optimization: {
                minimizer: [
                        new UglifyJsPlugin({
                                cache: true,
                                parallel: true,
                                sourceMap: true,
                                uglifyOptions: {
                                        drop_console: true,
                                        output: {
                                                comments: false
                                        }
                                },
                        }),
                        new OptimizeCSSAssetsPlugin({})
                ]
        },
}