import Router from 'koa-router';


// @TODO replace by React 404
import notFound from 'src/server/views/404';

import { render } from '../middleware/render';
// import { render } from '../middleware/render';
import main from './main';
import product from './product';

// page components
// import Developers from '../../common/containers/Developers';
// import Company from '../../common/containers/Company';



const router = new Router();

router
    .get('/', main)
    .get('/product', product)
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