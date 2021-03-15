const path = require('path')
module.exports = {
    entry: {
        ColorsType: path.resolve(__dirname, '../src/constructor/pages/ui-kit/ColorsType/ColorsType.js')
    },
    output: {
        path: path.join(__dirname, '../build'),
        name: './js/[name].js'
    },
    devServer: {
        historyApiFallback: true,
        contentBase: path.resolve(__dirname, '../build'),
        open: true,
        compress: true,
        hot: true,
        port: 8080,
    }
}
