var path = require('path'),
    webpack = require('webpack'),
    ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    devtool: '#source-map',

    entry: {
        'ui-tab-bar': './index.js'
    },

    output: {
        path: path.join(__dirname, 'dist'),
        publicPath: '/dist/',
        filename: '[name].js'
    },

    resolve: {
        extensions: [
            '.webpack.js',
            '.web.js',
            '.js',
            '.jsx',
            '.ts',
            '.tsx'
        ]
    },

    module: {
        rules: [
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract({
                    fallbackLoader: 'style-loader',
                    loader: [
                        { loader: 'css-loader?sourceMap&importLoaders=1' },
                        { loader: 'postcss-loader' },
                        { loader: 'sass-loader?sourceMap' }
                    ]
                })
            }
        ]
    },

    devServer: {
        stats: 'errors-only'
    },

    plugins: [
        new webpack.LoaderOptionsPlugin({
            options: {
                context: __dirname,
                output: {
                    path: './'
                },
                postcss: [
                    require('cssnano')({
                        autoprefixer: {
                            add: true,
                            remove: false
                        }
                    })
                ]
            }
        }),
        new ExtractTextPlugin('[name].css')
    ]
};
