const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlWebpackPugPlugin = require('html-webpack-pug-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')


module.exports = {
    entry: {
        ColorsType: path.resolve(__dirname, '../src/constructor/pages/ui-kit/colors-type/colors-type.js')
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
                test: /\.scss$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../src/constructor/pages/ui-kit/colors-type/colors-type.pug'),
            chunks: ['ColorsType'],
            filename: 'colors-type.html'
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: './css/[name].css'
        }),
    ]
}
