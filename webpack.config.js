const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    context: path.resolve(__dirname, "src"),
    entry: {
        index: './index'
    },
    output: {
        path: path.resolve(__dirname, "public"),
        filename: "[name].js",
        library:  "[name]"
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'stage-0']
                }
            },
            {
                test: /\.html$/,
                exclude: /node_modules/,
                loaders: ["raw"]
            },
            {
                test: /\.css$/,
                loader: 'style!css!'
            },
            {
                test:   /\.(png|jpg|svg|ttf|eot|woff|woff2)$/,
                loader: 'file?name=[path][name].[ext]'
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract('css!sass')
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin({
            filename: 'public/[name].css',
            allChunks: true
        })
    ]
};
