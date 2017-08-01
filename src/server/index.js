import 'babel-polyfill';

import Koa from 'koa';
import serve from 'koa-static';
import Pug from 'koa-pug';

import Raven from 'raven';
Raven.config('https://ace191c88ed04623811498c5c845165d:d67b1a9a4ca24702837aaa924d935552@sentry.io/198363').install();


import router from './routes';




const app = new Koa();

// @todo is it necessary?
new Pug({
    viewPath: './src/server/views',
    basedir: './src/server/views',
    app: app
});


app
    .use(serve('./dist'))
    .use(router.routes())
    // .on('error', err => {
    //     Raven.captureException(err, (err, eventId) => {
    //         console.log('Reported error ' + eventId);
    //     })
    // })

app.listen(3001);