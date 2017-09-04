import 'babel-polyfill';

import Koa from 'koa';
import serve from 'koa-static';
import mount from 'koa-mount';
import bodyParser from 'koa-bodyparser';

import Raven from 'raven';
Raven.config('https://ace191c88ed04623811498c5c845165d:d67b1a9a4ca24702837aaa924d935552@sentry.io/198363').install();


import router from './routes';
import { readAssets } from './middleware/readAssets';
import serverErrorHandling from './middleware/serverErrorHandling';
import accessLog from './middleware/accessLog';
import initLogger from './middleware/initLogger';




const app = new Koa();


app
    // add logger to context
    .use(initLogger)
    .use(accessLog)
    .use(serverErrorHandling)
    .use(bodyParser())
    // log requests for static files
    .use(mount('/static', serve('./dist', { maxage: 2592000000 })))  // 30 days
    .use(serve('./assets', { maxage: 2592000000 }))  // 30 days
    .use(readAssets)
    .use(router.routes())
    // .on('error', err => {
    //     Raven.captureException(err, (err, eventId) => {
    //         console.log('Reported error ' + eventId);
    //     })
    // })


app.listen(3001);