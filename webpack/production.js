const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlWebpackPugPlugin = require('html-webpack-pug-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const {ProvidePlugin} = require("webpack");


module.exports = {
    entry: {
        'colors-type': path.resolve(__dirname, '../src/constructor/pages/ui-kit/colors-type/colors-type.js'),
        'form-elements': path.resolve(__dirname, '../src/constructor/pages/ui-kit/form-elements/form-elements.js'),
        'main': path.resolve(__dirname, '../src/main.js')
    },
    output: {
        path: path.join(__dirname, '../build'),
        filename: './js/[name].js'
    },
    module: {
        rules: [
            {
                test: /\.pug$/,
                use: [{
                    loader: 'pug-loader',
                    options: {
                        pretty: true
                    }
                }]
            },
/*           {
                test: /\.css$/,
                exclude: /node_modules/,
                use: ['style-loader', 'css-loader']
            },*/
/*            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: ['style-loader', 'css-loader']
            },*/
            {
                test: /\.(scss|css)$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
            },
            {
                test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'fonts/',
                            publicPath: '../fonts'
                        }
                    }
                ]
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../src/constructor/pages/ui-kit/colors-type/colors-type.pug'),
            chunks: ['colors-type', 'main'],
            filename: 'colors-type.html'
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../src/constructor/pages/ui-kit/form-elements/form-elements.pug'),
            chunks: ['form-elements', 'main'],
            filename: 'form-elements.html'
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: './css/[name].css'
        }),
        new ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        })
    ],
    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    }
}
