import Router from 'koa-router';


// @TODO replace by React 404
import notFound from 'src/server/views/404';

import { render } from '../middleware/render';
// import { render } from '../middleware/render';
import main from './main';
import product from './product';

// page components
import Developers from 'src/common/containers/Developers';
import Company from 'src/common/containers/Company';



const router = new Router();

router
    .get('/', main)
    .get('/product', product)
    .get('/developers', render('developers', Developers))
    .get('/company', render('company', Company))
    .post('/api/subscription', async ctx => {
        console.log(ctx.request.body.email);
        ctx.body = { result: 'success' };
    })
    .get('*', async ctx => {
        ctx.status = 404;
        ctx.body = notFound();
    })


export default router;