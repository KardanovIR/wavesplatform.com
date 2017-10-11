const env = require('node-env-file');
env('variables.env');

process.env.SERVER_NAME = '0.0.0.0:3001';

require('../dist/app');