import 'babel-polyfill';

import Koa from 'koa';
import serve from 'koa-static';
import Pug from 'koa-pug';


import router from './routes';




try {
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
        .listen(3000);
        
} catch (err) {
    console.error(err)
}