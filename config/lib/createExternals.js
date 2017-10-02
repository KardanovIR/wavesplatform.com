const { readdirSync } = require('fs');


module.exports = () => {
    const nodeModules = {};
    readdirSync('node_modules')
        .filter(function (x) {
            return ['.bin'].indexOf(x) === -1;
        })
        .forEach(function (mod) {
            nodeModules[mod] = 'commonjs ' + mod;
        });

    return nodeModules;
}