import Router from 'koa-router';


// @TODO replace by React 404
import notFound from 'src/server/views/404';

import { render } from '../render';

// page components
import Main from '../../common/containers/Main';
import Product from '../../common/containers/Product';
import Developers from '../../common/containers/Developers';



const router = new Router();

router
    .get('/', render('main', Main))
    .get('/product', render('product', Product))
    .get('/developers', render('developers', Product))
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