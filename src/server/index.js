import 'babel-polyfill';

import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import cookiesMiddleware from 'universal-cookie-koa';

import Raven from 'raven';
Raven.config(
  'https://ace191c88ed04623811498c5c845165d:d67b1a9a4ca24702837aaa924d935552@sentry.io/198363'
).install();

import router from './routes';
import { readAssets } from './middleware/readAssets';
import serverErrorHandling from './middleware/serverErrorHandling';
import accessLog from './middleware/accessLog';
import initLogger from './middleware/initLogger';
import serveStatic from './middleware/serveStatic';
import sniffLocale from './middleware/sniffLocale';

import isProd from 'src/common/utils/isProd';

const app = new Koa();

app
  // add logger to context
  .use(initLogger)
  .use(accessLog)
  .use(serverErrorHandling)
  .use(cookiesMiddleware())
  .use(bodyParser())
  .use(sniffLocale)
  .use(serveStatic)
  .use(readAssets)
  .use(router.routes());

if (process.env.NODE_ENV === 'production') {
  app.on('error', err => {
    Raven.captureException(err, (err, eventId) => {
      console.log('Reported error ' + eventId);
    });
  });
}

app.listen(3001);
