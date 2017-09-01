
const config = require('./webpack.back.prod.config.js');

const createAlias = require('./lib/createAlias');

config.resolve.alias = createAlias();

module.exports = config;