import Router from 'koa-router';

// middleware
import { render } from '../middleware/render';
import home from './get/home';
import product from './get/product';
import wallet from './get/products/wallet';
import token from './get/products/token';
import mining from './get/mining';
import leasing from './get/leasing';
import Error404 from './get/Error404';
import company from './get/company';

// page components
import Developers from 'src/common/containers/Developers';
import GetWaves from 'src/common/containers/GetWaves';

// nested routers
import subdomains from './subdomains';
import api from './api';

const router = new Router();

router
  .get('/', home)
  .get('/product', product)
  .get('/product/wallet', wallet)
  .get('/product/token', token)
  .get(
    '/developers',
    render({
      script: 'developers',
      component: Developers,
      description: 'Build applications on the blockchain',
    })
  )
  .get('/company', company)
  .get(
    '/get-waves',
    render({
      script: 'getWaves',
      component: GetWaves,
      description: 'Get Waves',
    })
  )
  .get('/mining', mining)
  .get('/leasing', leasing)
  .use('/api', api.routes())
  .use('/subdomains', subdomains.routes())
  .get('*', Error404);

export default router;
