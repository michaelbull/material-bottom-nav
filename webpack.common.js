const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

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
        }),
        new HtmlWebpackPlugin({
            filename: 'horizontal.html',
            template: path.join(__dirname, 'demo', 'horizontal.hbs')
        })
    ],

    devServer: {
        stats: 'errors-only'
    }
};
