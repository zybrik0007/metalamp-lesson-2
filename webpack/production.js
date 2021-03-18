const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlWebpackPugPlugin = require('html-webpack-pug-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')


module.exports = {
    entry: {
        'colors-type': path.resolve(__dirname, '../src/constructor/pages/ui-kit/colors-type/colors-type.js'),
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
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: './css/[name].css'
        }),
    ],
    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    }
}
