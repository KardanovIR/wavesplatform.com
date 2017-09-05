export default () => {
    if (process.env.NODE_ENV !== 'production') {
        const env = require('node-env-file');
        env('variables.env');
    }
}