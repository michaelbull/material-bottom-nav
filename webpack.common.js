const path = require('path');
const webpack = require('webpack');
const cssnano = require('cssnano');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: {
        'bottom-nav': path.resolve(__dirname, 'demo')
    },

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },

    module: {
        rules: [
            {
                test: /\.hbs$/,
                loader: 'handlebars-loader'
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.join(__dirname, 'demo', 'index.hbs')
        }),
        new HtmlWebpackPlugin({
            filename: 'badges.html',
            template: path.join(__dirname, 'demo', 'badges.hbs')
        }),
        new HtmlWebpackPlugin({
            filename: 'hidden-labels.html',
            template: path.join(__dirname, 'demo', 'hidden-labels.hbs')
        })
    ],

    devServer: {
        stats: 'errors-only'
    }
};
