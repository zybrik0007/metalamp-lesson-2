const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlWebpackPugPlugin = require('html-webpack-pug-plugin')
module.exports = {
    entry: {
        ColorsType: path.resolve(__dirname, '../src/constructor/pages/ui-kit/ColorsType/ColorsType.js')
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
            template: path.resolve(__dirname, '../src/constructor/pages/ui-kit/ColorsType/ColorsType.pug'),
            chunks: ['ColorsType'],
            filename: 'ColorsType.html'
        }),
        new HtmlWebpackPugPlugin()
    ]
}
