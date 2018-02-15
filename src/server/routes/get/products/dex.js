import compose from 'koa-compose';
import { render } from 'src/server/middleware/render';
import Dex from 'src/common/containers/Products/Dex';
import runApiRequests, {
  getDexData,
  getDexTopPairs,
} from 'src/server/middleware/api';
export default compose([
  runApiRequests([getDexTopPairs, getDexData]),
  render({
    script: 'dex',
    component: Dex,
    description: 'Trade securely on the  decentralised exchange',
  }),
]);
