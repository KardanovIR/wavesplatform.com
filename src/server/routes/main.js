import compose from 'koa-compose';

import { getDexData } from '../middleware/getDexData';
import { render } from '../middleware/render';

import Main from '../../common/containers/Main';


export default compose([
    getDexData,
    render('main', Main),
])