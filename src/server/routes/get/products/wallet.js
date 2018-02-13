import compose from 'koa-compose';

// import runApiRequests, {
//   getDexTopPairs,
//   getDexData,
// } from 'src/server/middleware/api';
import { render } from 'src/server/middleware/render';

import Wallet from 'src/common/containers/Products/Wallet';

export default compose([
  // runApiRequests([getDexTopPairs, getDexData]),
  render({
    script: 'wallet',
    component: Wallet,
    description: 'Create a multi-currency wallet',
  }),
]);
