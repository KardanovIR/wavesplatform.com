import Router from 'koa-router';


// middleware
import { render } from '../middleware/render';
import home from './get/home';
import product from './get/product';
import mining from './get/mining';
// import leasing from './get/leasing';
import Error404 from './get/Error404';


// page components
import Developers from 'src/common/containers/Developers';
import Company from 'src/common/containers/Company';
import GetWaves from 'src/common/containers/GetWaves';


// nested routers
import subdomains from './subdomains';
import api from './api';



const router = new Router();

router
    .get('/', home)
    .get('/product', product)
    .get('/developers', render({ script: 'developers', component: Developers, description: 'Build applications on the blockchain' }))
    .get('/company', render({ script: 'company', component: Company, description: 'We change people’s lives' }))
    .get('/get-waves', render({ script: 'getWaves', component: GetWaves, description: 'Get Waves'  }))
    .get('/mining', mining)
    .use('/api', api.routes())
    .use('/subdomains', subdomains.routes())
    .get('*', Error404)


export default router;