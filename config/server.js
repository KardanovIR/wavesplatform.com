const env = require('node-env-file');
env('variables.env');

require('../dist/app');