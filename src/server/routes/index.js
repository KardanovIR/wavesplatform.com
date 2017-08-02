import Router from 'koa-router';


// @TODO replace by React 404
import notFound from 'src/server/views/404';

import { run } from './run';

// page components
import Main from '../../common/containers/Main';
import Developers from '../../common/containers/Developers';



const router = new Router();

router
    .get('/', run(Main, 'main'))
    .get('/developers', run(Developers, 'developers'))
    // .get('/product', async ctx => {
    //     ctx.body = view({ scriptUrl: 'product' });
    // })
    // .get('/company', async ctx => {
    //     ctx.body = view({ scriptUrl: 'company' });
    // })
    .post('/api/subscription', async ctx => {
        console.log(ctx.request.body.email);
        ctx.body = { result: 'success' };
    })
    .get('*', async ctx => {
        ctx.body = notFound();
    })


export default router;