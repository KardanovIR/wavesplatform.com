import Router from 'koa-router';


import view from 'src/server/views/index';
import notFound from 'src/server/views/404';


const router = new Router();


router
    .get('/', async ctx => {
        ctx.body = view({ scriptUrl: 'main' });
    })
    .get('/product', async ctx => {
        ctx.body = view({ scriptUrl: 'product' });
    })
    .get('/developers', async ctx => {
        ctx.body = view({ scriptUrl: 'developers' });
    })
    .get('/company', async ctx => {
        ctx.body = view({ scriptUrl: 'company' });
    })
    .get('*', async ctx => {
        ctx.body = notFound();
    })


export default router;