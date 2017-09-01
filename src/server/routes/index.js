import Router from 'koa-router';


import { render } from '../middleware/render';
import main from './main';
import product from './product';
import Error404 from './Error404';

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
    .get('*', Error404)


export default router;