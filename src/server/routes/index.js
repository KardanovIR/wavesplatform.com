import Router from 'koa-router';


import view from 'src/server/views/index';


const router = new Router();


router.get('/', async ctx => {
    ctx.body = view();
});

export default router;