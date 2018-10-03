import compose from 'koa-compose';

import runApiRequests, { getPairsData } from 'src/server/middleware/api';

import { render } from 'src/server/middleware/render';

import Dex from 'src/common/containers/Products/Dex';

export default compose([
  runApiRequests([getPairsData]),
  render({
    script: 'dex',
    component: Dex,
    description: 'Trade securely on the  decentralised exchange',
  }),
]);
