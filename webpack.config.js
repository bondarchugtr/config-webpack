const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'my-index.js',
    },
    module: {
        rules: [
            {
                test: /\.scss$/i,
                use: [
                    "style-loader",
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "sass-loader"],
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: ["babel-loader"],

            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({ template: 'src/ index.html' }),
        new CleanWebpackPlugin(),
        // new MiniCssExtractPlugin({ filename: "style.css" }),
    ],
    devServer: {
        port: 4545,
        open: true,
    }
};