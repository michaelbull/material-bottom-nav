var path = require('path'),
    webpack = require('webpack'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = function (env) {
    var config = {
        devtool: '#hidden-source-map',

        entry: {
            'bottom-nav': path.join(__dirname, 'demo')
        },

        output: {
            path: path.join(__dirname, 'dist'),
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
                    test: /\.hbs$/,
                    loader: 'handlebars-loader'
                },
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
            new HtmlWebpackPlugin({
                filename: 'index.html',
                template: path.join(__dirname, 'demo', 'labels-show.hbs')
            }),
            new HtmlWebpackPlugin({
                filename: 'labels-hide.html',
                template: path.join(__dirname, 'demo', 'labels-hide.hbs')
            })
        ]
    };

    if (env.prod) {
        config.plugins.push(new ExtractTextPlugin('[name].css'));

        config.module.rules.push({
            test: /\.scss$/,
            loader: ExtractTextPlugin.extract({
                fallbackLoader: 'style-loader',
                loader: [
                    { loader: 'css-loader?sourceMap&importLoaders=1' },
                    { loader: 'postcss-loader' },
                    { loader: 'sass-loader?sourceMap' }
                ]
            })
        });
    } else {
        config.module.rules.push({
            test: /\.scss$/,
            use: [
                'style-loader',
                'css-loader?sourceMap&importLoaders=1',
                'postcss-loader',
                'sass-loader?sourceMap'
            ]
        });
    }

    return config;
};
