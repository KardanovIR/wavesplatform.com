import compose from 'koa-compose';

import runApiRequests, { getDexData } from 'src/server/middleware/api';
import { render } from 'src/server/middleware/render';

import Product from 'src/common/containers/Product';

export default compose([
  runApiRequests([getDexData]),
  render({
    script: 'product',
    component: Product,
    description: 'Use blockchain — it’s easy with Waves',
  }),
]);
