const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlWebpackPugPlugin = require('html-webpack-pug-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')


module.exports = {
    entry: {
        'colors-type': path.resolve(__dirname, '../src/constructor/pages/ui-kit/colors-type/colors-type.js')
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
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../src/constructor/pages/ui-kit/colors-type/colors-type.pug'),
            chunks: ['colors-type'],
            filename: 'colors-type.html'
        }),
        new HtmlWebpackPugPlugin(),
        new CleanWebpackPlugin()
    ]
}
