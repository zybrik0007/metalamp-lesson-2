const production = require('./webpack/production')
const development= require('./webpack/development')

const isProduction = process.env.NODE_ENV === 'production'

module.exports = isProduction ? production : development
