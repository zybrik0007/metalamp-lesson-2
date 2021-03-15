const path = require('path')
module.exports = {
    entry: {
        ColorsType: path.resolve(__dirname, '../src/constructor/pages/ui-kit/ColorsType/ColorsType.js')
    },
    output: {
        path: path.join(__dirname, '../build'),
        filename: './js/[name].js'
    }
}
