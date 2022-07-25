var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    devtool: 'source-map',
    mode: 'production',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js?v=' + Date.now(),
        publicPath: '/',
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: 'babel-loader',
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'style-loader',
                    'css-loader',
                ],
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: [
                    MiniCssExtractPlugin.loader,
                    // 'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            url: false,
                            sourceMap: true,
                        },
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true,
                        },
                    },
                ],
            },
        ],
    },
    devServer: {
        historyApiFallback: true,
        proxy: {
            '/api': 'http://localhost:50000',
        },
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Eat The Rainbow',
            template: 'public/index.html',
            meta: {
                author: '@nicolesmithdev',
                desc: 'This tool is an indepedent project developed to organize recipes specifically tailored for color-coded portion-control containers. This website is not affiliated with any company, program, or spokesperson.',
                robots: 'index, follow',
                'theme-color': '#8CC63F',
                viewport: 'width=device-width, initial-scale=1',
            },
            minify: false,
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css',
        }),
    ],
};
