const { join } = require('path');


module.exports = {
    modules: [
        join(__dirname, '../../'),
        'node_modules'
    ],
    extensions: ['.jsx', '.js', '.css', '.json']
};