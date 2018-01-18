import compose from 'koa-compose';

import getDexData from 'src/server/middleware/getDexData';
import runApiRequests from 'src/server/middleware/runApiRequests';
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
