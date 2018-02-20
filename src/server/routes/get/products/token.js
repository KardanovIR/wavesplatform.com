import compose from 'koa-compose';

import runApiRequests, { getDexData } from 'src/server/middleware/api';
import { render } from 'src/server/middleware/render';

import Token from 'src/common/containers/Products/Token';

export default compose([
  runApiRequests([getDexData]),
  render({
    script: 'token',
    component: Token,
    description: 'Issue, distribute and use your tokens',
  }),
]);
