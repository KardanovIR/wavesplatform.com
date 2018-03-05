import compose from 'koa-compose';

import { render } from 'src/server/middleware/render';

import Wallet from 'src/common/containers/Products/Wallet';

export default compose([
  render({
    script: 'wallet',
    component: Wallet,
    description: 'Create a multi-currency wallet',
  }),
]);
