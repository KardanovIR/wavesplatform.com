
const config = require('./webpack.back.prod.config.js');

const createBackendAlias = require('./lib/createBackendAlias');

config.resolve.alias = createBackendAlias();

module.exports = config;