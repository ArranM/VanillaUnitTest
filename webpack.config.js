const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");
module.exports = {
    mode: 'development',
    watchOptions: {
        ignored: ['**/node_modules/', '**/coverage/', '**/__tests__/']
    },
    entry: "./src/index.ts",
    devtool: 'inline-source-map',
    devServer: {
        port: 3000,
        hot: true,
        static: {
            directory: path.join(__dirname, 'dist')
        },
        compress: true,
    }, plugins: [
        new HtmlWebpackPlugin({
            template: './index.html',
            inject: 'body'
        }),
    ],
    // plugins: [
    //     new CopyPlugin({
    //         patterns: [
    //             { from: "src", to: "dist" }
    //             // { from: "other", to: "public" },
    //         ],
    //     }),
    // ],
    module: {
        rules: [
            {
                test: /\.ts?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.js'],
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    }
}