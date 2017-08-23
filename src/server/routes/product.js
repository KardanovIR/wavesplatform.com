import compose from 'koa-compose';

import { getDexTopPairs } from '../middleware/getDexTopPairs';
import { getDexData } from '../middleware/getDexData';
import { render } from '../middleware/render';



let Product;
if (process.env.NODE_ENV === 'production') {
    Product = require.ensure('../../common/containers/Product');
}



export default compose([
    getDexTopPairs,
    getDexData,
    render('product', Product),
])