import compose from 'koa-compose';

import runApiRequests, {
  getWavesTopNodes,
  getMrtWavesPrice,
} from 'src/server/middleware/api';

import { render } from 'src/server/middleware/render';

import Leasing from 'src/common/containers/Leasing';
import reducer from 'src/common/containers/Leasing/reducer';

export default compose([
  runApiRequests([getWavesTopNodes, getMrtWavesPrice]),
  render({
    script: 'leasing',
    component: Leasing,
    reducer,
    description: 'Join the Waves Network',
  }),
]);
