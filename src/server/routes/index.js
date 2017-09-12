import Router from 'koa-router';


import { render } from '../middleware/render';
import home from './home';
import product from './product';
import Error404 from './Error404';
import subscribe from './subscribe';

// page components
import Developers from 'src/common/containers/Developers';
import Company from 'src/common/containers/Company';
import GetWaves from 'src/common/containers/GetWaves';



const router = new Router();

router
    .get('/', home)
    .get('/product', product)
    .get('/developers', render({ script: 'developers', component: Developers, description: 'Build applications on the blockchain' }))
    .get('/company', render({ script: 'company', component: Company, description: 'We change people’s lives' }))
    .get('/get-waves', render({ script: 'getWaves', component: GetWaves, description: 'Get Waves'  }))
    .post('/api/subscription', subscribe)
    .get('*', Error404)


export default router;