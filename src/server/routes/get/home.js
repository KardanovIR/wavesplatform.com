import compose from 'koa-compose';

import runApiRequests, { getDexData } from 'src/server/middleware/api';
import { render } from 'src/server/middleware/render';

import Main from 'src/common/containers/Main';

export default compose([
  runApiRequests([getDexData]),
  render({
    script: 'main',
    component: Main,
    description: 'Get started with blockchain',
  }),
]);
