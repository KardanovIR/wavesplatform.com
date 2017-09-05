import compose from 'koa-compose';

import { getDexTopPairs } from '../middleware/getDexTopPairs';
import { getDexData } from '../middleware/getDexData';
import { render } from '../middleware/render';


import Product from 'src/common/containers/Product';


export default compose([
    getDexTopPairs,
    getDexData,
    render({
        script: 'product',
        component: Product,
        description: 'Use blockchain — it’s easy with Waves'
    }),
])