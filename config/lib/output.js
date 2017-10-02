const { join } = require('path');

module.exports = {
    path: join(__dirname, '../../dist'),
    filename: '[name].js',
    chunkFilename: '[name].chunk.js',
    publicPath: '/static/'
}