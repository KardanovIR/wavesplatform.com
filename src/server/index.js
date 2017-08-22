import 'babel-polyfill';

import Koa from 'koa';
import serve from 'koa-static';
import mount from 'koa-mount';
import Pug from 'koa-pug';
import bodyParser from 'koa-bodyparser';

import Raven from 'raven';
Raven.config('https://ace191c88ed04623811498c5c845165d:d67b1a9a4ca24702837aaa924d935552@sentry.io/198363').install();


import router from './routes';
import { readAssets } from './middleware/readAssets';




const app = new Koa();

// @todo is it necessary?
new Pug({
    viewPath: './src/server/views',
    basedir: './src/server/views',
    app: app
});


app
    .use(async (ctx, next) => {
        try {
            await next();
        } catch (err) {
            ctx.status = err.status || 500;
            ctx.body = err.message;
            ctx.app.emit('error', err, ctx);
            console.error(err);
        }
    })
    .use(bodyParser())
    .use(mount('/static', serve('./dist')))
    .use(readAssets)
    .use(router.routes())
    // .on('error', err => {
-    //     Raven.captureException(err, (err, eventId) => {
-    //         console.log('Reported error ' + eventId);
-    //     })
-    // })


app.listen(3001);