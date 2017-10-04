import compose from 'koa-compose';

import { getDexTopPairs } from 'src/server/middleware/getDexTopPairs';
import { getDexData } from 'src/server/middleware/getDexData';
import { render } from 'src/server/middleware/render';


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