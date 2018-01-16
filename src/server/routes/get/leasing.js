import compose from 'koa-compose';

import getWavesTopNodes from 'src/server/middleware/getWavesTopNodes';
import getMrtWavesPrice from 'src/server/middleware/getMrtWavesPrice';
import { render } from 'src/server/middleware/render';

import Leasing from 'src/common/containers/Leasing';
import reducer from 'src/common/containers/Leasing/reducer';

export default compose([
  getWavesTopNodes,
  getMrtWavesPrice,
  render({
    script: 'leasing',
    component: Leasing,
    reducer,
    description: 'Join the Waves Network',
  }),
]);
