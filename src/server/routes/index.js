import Router from 'koa-router';


// @TODO replace by React 404
import notFound from 'src/server/views/404';

import { render } from '../render';

// page components
// import Main from '../../common/containers/Main';
// import Product from '../../common/containers/Product';
// import Developers from '../../common/containers/Developers';
// import Company from '../../common/containers/Company';



const router = new Router();

router
    .get('/', render('main'))
    .get('/product', render('product'))
    .get('/developers', render('developers'))
    .get('/company', render('company'))
    .post('/api/subscription', async ctx => {
        console.log(ctx.request.body.email);
        ctx.body = { result: 'success' };
    })
    .get('*', async ctx => {
        ctx.body = notFound();
    })


export default router;