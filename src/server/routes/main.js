import compose from 'koa-compose';

import { getDexData } from '../middleware/getDexData';
import { render } from '../middleware/render';


let Main;
if (process.env.NODE_ENV === 'production') {
    Main = require.ensure('../../common/containers/Main');
}



export default compose([
    getDexData,
    render('main', Main),
])