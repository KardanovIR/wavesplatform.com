import compose from 'koa-compose';

import { getDexTopPairs } from '../middleware/getDexTopPairs';
import { getDexData } from '../middleware/getDexData';
import { render } from '../middleware/render';

import Product from '../../common/containers/Product';


export default compose([
    getDexTopPairs,
    getDexData,
    render('product', Product),
])