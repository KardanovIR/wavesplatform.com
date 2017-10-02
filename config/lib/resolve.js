const { join } = require('path');


module.exports = {
    alias: {
        react: 'node_modules/react'
    },
    modules: [
        join(__dirname, '../../'),
        'node_modules'
    ],
    extensions: ['.jsx', '.js', '.css', '.json']
};